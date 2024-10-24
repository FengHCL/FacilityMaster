define("com/hcl/mario/BiMonthlyCalendar/userBiMonthlyCalendarController", function() {
            const SECONDS = 86400;
            const SKIN_FLX_DAY = 'skinFlxDay';
            //   const SKIN_FLX_DAY_SELECTED = 'skinFlxDaySelected';
            const SKIN_FLX_DAY_SELECTED = 'skinFlxDay';
            const SKIN_DAY = 'skinDay';
            const SKIN_DAY_OTHER_MONTH = 'skinDayOtherMonth';
            const SKIN_DAY_SELECTED = 'skinDaySelected';
            const SKIN_DAY_HOLIDAY = 'skinDayHoliday';
            return {
                constructor: function(baseConfig, layoutConfig, pspConfig) {
                    this.view.preShow = () => {
                        if (!this.initDone) {
                            this.initDone = true;
                            this.view.monthSelector.onChange = (month, year) => {
                                this.setMonth({
                                    month,
                                    year
                                });
                                this.onChangeMonth(month, year);
                            };
                            this.view.flxToday.onClick = () => this.jumpToToday();
                            this.initDimension();
                            this.initWeekdays();
                        }
                    };
                    this.view.postShow = () => {
                        const dateToSet = this.getDate(this.selectedDate);
                        this.setMonth({
                            month: dateToSet.getMonth() + 1,
                            year: dateToSet.getFullYear()
                        });
                    };
                },
                initDimension() {
                    for (let i = 1; i <= 6; i++) {
                        this.view[`week${i}`].height = `${this.weekRowHeight}dp`;
                    }
                    for (let i = 1; i <= 6; i++) {
                        this.view[`week${i}Bottom`].height = `${this.weekRowHeight}dp`;
                    }
                    const width = parseInt(this.view.width.replaceAll('dp', ''));
                    this.view.topCalendar.width = `${width - 20}dp`;
                    this.view.bottomCalendar.width = `${width - 20}dp`;
                },
                initWeekdays() {
                    const weekdays = new Array(7);
                    const todayTime = new Date().getTime();
                    for (let i = 0; i < 7; i++) {
                        const date = new Date(todayTime + (i * SECONDS * 1000));
                        let currentLocale = voltmx.i18n.getCurrentLocale();
                        currentLocale = currentLocale ? currentLocale.split('_')[0] : 'en-US';
                        let weekday = date.toLocaleString(currentLocale, {
                            weekday: 'long'
                        });
                        weekday = weekday.substring(0, 1).toUpperCase() + weekday.substring(1, 3);
                        weekdays[date.getDay()] = weekday;
                    }
                    for (let i = 1; i <= 7; i++) {
                        this.view.weekdaysTop[`lbl${i}`].text = weekdays[i % 7];
                        this.view.weekdaysBottom[`lbl${i}`].text = weekdays[i % 7];
                    }
                },
                initGettersSetters: function() {
                    defineGetter(this, 'selectedDate', () => {
                        return this._selectedDate;
                    });
                    defineSetter(this, 'selectedDate', value => {
                        value = value || this.getDateAsString(new Date());
                        this._selectedDate = value;
                    });
                    defineGetter(this, 'visibleDates', () => {
                        return this._visibleDates;
                    });
                    defineSetter(this, 'visibleDates', value => {
                        this._visibleDates = value || [];
                    });
                    defineGetter(this, 'eventTypes', () => {
                        return this._eventTypes;
                    });
                    defineSetter(this, 'eventTypes', value => {
                        this._eventTypes = value;
                    });
                    defineGetter(this, 'weekRowHeight', () => {
                        return this._weekRowHeight;
                    });
                    defineSetter(this, 'weekRowHeight', value => {
                        this._weekRowHeight = value;
                    });
                },
                jumpToToday() {
                    const today = new Date();
                    const day = today.getDate();
                    const month = today.getMonth() + 1;
                    const year = today.getFullYear();
                    this.setMonth({
                        month,
                        year
                    });
                    this.selectDay(this.findDay({
                        month,
                        day
                    }));
                    this.onChangeMonth(month, year);
                },
                refresh() {
                    const dateArray = this.selectedDate.split('-');
                    const year = parseInt(dateArray[0]);
                    const month = parseInt(dateArray[1]);
                    const day = parseInt(dateArray[2]);
                    this.setMonth({
                        month,
                        year
                    });
                    const mcd = this.findDay({
                        month,
                        day
                    });
                    this.selectDay(mcd);
                },
                setMonth({
                    month,
                    year
                }) {
                    const calendarUtils = require('com/hcl/mario/MonthlyCalendarDay/CalendarUtils');
                    this.view.monthSelector.year = year;
                    this.view.monthSelector.month = month;
                    const firstDay = new Date(year, month - 1, 1, 12, 0, 0);
                    let firstWeekday = firstDay.getDay();
                    firstWeekday = firstWeekday === 0 ? 7 : firstWeekday;
                    firstWeekday--;
                    let dayOfCalendar = new Date(firstDay.getTime() - (firstWeekday * SECONDS * 1000));
                    this.visibleDates = [];
                    for (let i = 1; i <= 6; i++) {
                        const week = this.view[`week${i}`];
                        week.removeAll();
                        for (let j = 1; j <= 7; j++) {
                            const args = {
                                id: `${new Date().getTime()}_${i}_${j}`,
                                height: `100%`,
                                skin: this.getDateAsString(dayOfCalendar) === this.selectedDate ? SKIN_FLX_DAY_SELECTED : SKIN_FLX_DAY
                            };
                            const mcd = new com.hcl.mario.MonthlyCalendarDay(args, {}, {});
                            mcd.month = dayOfCalendar.getMonth() + 1;
                            mcd.day = dayOfCalendar.getDate();
                            mcd.year = dayOfCalendar.getFullYear();
                            if ((this.getDateAsString(dayOfCalendar) === this.selectedDate)) {
                                mcd.skinDay = SKIN_DAY_SELECTED;
                            } else if (mcd.month !== month) {
                                mcd.skinDay = SKIN_DAY_OTHER_MONTH;
                            } else if (calendarUtils.isHoliday({
                                    day: mcd.day,
                                    month: mcd.month,
                                    year: mcd.year
                                })) {
                                mcd.skinDay = SKIN_DAY_HOLIDAY;
                            } else {
                                mcd.skinDay = SKIN_DAY;
                            }
                            mcd.onDayClick = () => {
                                this.selectDay(mcd);
                            };
                            this.visibleDates.push(mcd.getDate());
                            week.add(mcd);
                            dayOfCalendar = this.getNextDate(dayOfCalendar);
                        }
                    }
                    const showWeek6 = this.view.week6.widgets()[0].day >= 30;
                    const heightWeeks = showWeek6 ? 6 * this.weekRowHeight : 5 * this.weekRowHeight;
                    this.view.flxCalendar.height = `${heightWeeks}dp`;
                    this.view.topCalendar.height = `${90 + heightWeeks}dp`;
                    this.setBottomMonth({
                        month: month < 12 ? month + 1 : 1,
                        year: month < 12 ? year : year + 1
                    });
                    const showWeek6Bottom = this.view.week6Bottom.widgets()[0].day >= 30;
                    const heightWeeksBottom = showWeek6Bottom ? 6 * this.weekRowHeight : 5 * this.weekRowHeight;
                    this.view.flxCalendarBottom.height = `${heightWeeksBottom}dp`;
                    this.view.bottomCalendar.height = `${90 + heightWeeksBottom}dp`;
                    this.view.height = `${10 + 90 + heightWeeks + 10 + 90 + heightWeeksBottom + 10}dp`;
                    this.view.forceLayout();
                },
                setBottomMonth({
                    month,
                    year
                }) {
                    const calendarUtils = require('com/hcl/mario/MonthlyCalendarDay/CalendarUtils');
                    this.view.monthSelectorBottom.year = year;
                    this.view.monthSelectorBottom.month = month;
                    const firstDay = new Date(year, month - 1, 1, 12, 0, 0);
                    let firstWeekday = firstDay.getDay();
                    firstWeekday = firstWeekday === 0 ? 7 : firstWeekday;
                    firstWeekday--;
                    let dayOfCalendar = new Date(firstDay.getTime() - (firstWeekday * SECONDS * 1000));
                    for (let i = 1; i <= 6; i++) {
                        const week = this.view[`week${i}Bottom`];
                        week.removeAll();
                        for (let j = 1; j <= 7; j++) {
                            const args = {
                                id: `${new Date().getTime()}_${i}_${j}`,
                                height: `100%`,
                                skin: this.getDateAsString(dayOfCalendar) === this.selectedDate ? SKIN_FLX_DAY_SELECTED : SKIN_FLX_DAY
                            };
                            const mcd = new com.hcl.mario.MonthlyCalendarDay(args, {}, {});
                            mcd.month = dayOfCalendar.getMonth() + 1;
                            mcd.day = dayOfCalendar.getDate();
                            mcd.year = dayOfCalendar.getFullYear();
                            if ((this.getDateAsString(dayOfCalendar) === this.selectedDate)) {
                                mcd.skinDay = SKIN_DAY_SELECTED;
                            } else if (mcd.month !== month) {
                                mcd.skinDay = SKIN_DAY_OTHER_MONTH;
                            } else if (calendarUtils.isHoliday({
                                    day: mcd.day,
                                    month: mcd.month,
                                    year: mcd.year
                                })) {
                                mcd.skinDay = SKIN_DAY_HOLIDAY;
                            } else {
                                mcd.skinDay = SKIN_DAY;
                            }
                            mcd.onDayClick = () => {
                                this.selectDay(mcd);
                            };
                            const visibleDate = mcd.getDate();
                            (this.visibleDates.indexOf(visibleDate) === -1) && (this.visibleDates.push(visibleDate));
                            week.add(mcd);
                            dayOfCalendar = this.getNextDate(dayOfCalendar);
                        }
                    }
                },
                selectDay(mcd) {
                    const calendarUtils = require('com/hcl/mario/MonthlyCalendarDay/CalendarUtils');
                    const currentDay = this.getDate(this.selectedDate);
                    const currentMcds = this.findDays({
                        month: currentDay.getMonth() + 1,
                        day: currentDay.getDate()
                    });
                    currentMcds.forEach((currentMcd) => {
                        currentMcd.mcd.skin = SKIN_FLX_DAY;
                        if (currentMcd.bottom) {
                            currentMcd.mcd.skinDay = (currentMcd.mcd.month !== this.view.monthSelectorBottom.month) ? SKIN_DAY_OTHER_MONTH : (calendarUtils.isHoliday({
                                day: currentMcd.mcd.day,
                                month: currentMcd.mcd.month,
                                year: currentMcd.mcd.year
                            }) ? SKIN_DAY_HOLIDAY : SKIN_DAY);
                        } else {
                            currentMcd.mcd.skinDay = (currentMcd.mcd.month !== this.view.monthSelector.month) ? SKIN_DAY_OTHER_MONTH : (calendarUtils.isHoliday({
                                day: currentMcd.mcd.day,
                                month: currentMcd.mcd.month,
                                year: currentMcd.mcd.year
                            }) ? SKIN_DAY_HOLIDAY : SKIN_DAY);
                        }
                    });
                    mcd.skin = SKIN_FLX_DAY_SELECTED;
                    mcd.skinDay = SKIN_DAY_SELECTED;
                    this.selectedDate = this.getDateAsString(new Date(mcd.year, mcd.month - 1, mcd.day));
                    this.onSelect(this.selectedDate);
                },
                findDay({
                    day,
                    month
                }) {
                    const ret = this.findDays({
                        day,
                        month
                    });
                    return ret.length > 0 ? ret[0].mcd : null;
                },
                findDays({
                    day,
                    month
                }) {
                    let ret = [];
                    for (let i = 1; i <= 6; i++) {
                        const week = this.view[`week${i}`];
                        for (let j = 0; j < 7; j++) {
                            const mcd = week.widgets()[j];
                            if (mcd.day === day && mcd.month === month) {
                                ret.push({
                                    mcd,
                                    bottom: false
                                });
                            }
                        }
                    }
                    for (let i = 1; i <= 6; i++) {
                        const week = this.view[`week${i}Bottom`];
                        for (let j = 0; j < 7; j++) {
                            const mcd = week.widgets()[j];
                            if (mcd.day === day && mcd.month === month) {
                                ret.push({
                                    mcd,
                                    bottom: true
                                });
                            }
                        }
                    }
                    return ret;
                },
                getNextDate(date) {
                    return new Date(date.getTime() + (SECONDS * 1000));
                },
                getDateAsString(date) {
                    const addZero = (num) => {
                        if (num.length === 1) {
                            return `0${num}`;
                        }
                        return num;
                    };
                    return `${date.getFullYear()}-${addZero(`${date.getMonth() + 1}`)}-${addZero(`${date.getDate()}`)}`;
    },

    getDate(dateString){
      const dateComponents = dateString.split('-');
      return new Date(parseInt(dateComponents[0]), parseInt(dateComponents[1]) - 1, parseInt(dateComponents[2]));
    },


    onSelect(){},

    onChangeMonth(month, year){},

    setDayEvents(dayEvents){
      this.resetDayEvents();

      const eventPosition = {};

      dayEvents.forEach((dayEvent) => {
        if(eventPosition[dayEvent.id] === undefined){
          const allDays = dayEvents.filter((d) => d.id === dayEvent.id);
          const dateComponents = dayEvent.date.split('-');
          const mcdStart = this.findDay({day: parseInt(dateComponents[2]), month: parseInt(dateComponents[1])});
          eventPosition[dayEvent.id] = mcdStart.getFirstEmptyLine() || eventPosition[dayEvent.id];
          allDays.forEach((event) => {
            const dc = event.date.split('-');
            const day = parseInt(dc[2]);
            const month = parseInt(dc[1]);
            this.findDays({day, month}).forEach(({mcd, bottom}) => {
              let space;
              if(event.startTime && event.endTime){
                space = 'center';
              } else if(event.startTime){
                space = 'right';
              } else if(event.endTime){
                space = 'left';
              } else {
                space = 'all';
              }

              let skinAll;
              let skinPartial;
              const eventType = this.eventTypes.data.find((e) => e.eventType === event.eventType);
              if(eventType){
//                const isSameMonth = bottom ? this.view.monthSelectorBottom.month === mcd.month : this.view.monthSelector.month === mcd.month;
//                 skinAll = isSameMonth ? eventType.skinAll || 'slFbox' : 'slFBox';
//                 skinPartial = isSameMonth ? eventType.skinPartial || 'slFbox' : 'slFbox';
                skinAll = eventType.skinAll;
                skinPartial = eventType.skinPartial;
              }

              mcd.addEventLine({
                eventId: event.id, 
                space, 
                position: eventPosition[event.id], 
                skinAll, 
                skinPartial
              });     

            });
          });
        }
      });

      this.view.forceLayout();
    },

    resetDayEvents(){
      for(let i = 1; i <= 6; i++){
        const week = this.view[`week${i}`];
        for(let j = 0; j < 7; j++){
          const mcd = week.widgets()[j];
          mcd.resetEventLines();
        }
      }
      for(let i = 1; i <= 6; i++){
        const week = this.view[`week${i}Bottom`];
        for(let j = 0; j < 7; j++){
          const mcd = week.widgets()[j];
          mcd.resetEventLines();
        }
      }      
    }
  };
});
define("com/hcl/mario/BiMonthlyCalendar/BiMonthlyCalendarControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/mario/BiMonthlyCalendar/BiMonthlyCalendarController", ["com/hcl/mario/BiMonthlyCalendar/userBiMonthlyCalendarController", "com/hcl/mario/BiMonthlyCalendar/BiMonthlyCalendarControllerActions"], function() {
    var controller = require("com/hcl/mario/BiMonthlyCalendar/userBiMonthlyCalendarController");
    var actions = require("com/hcl/mario/BiMonthlyCalendar/BiMonthlyCalendarControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
