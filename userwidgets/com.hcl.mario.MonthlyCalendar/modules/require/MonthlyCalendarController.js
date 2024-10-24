define(function() {
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
        if(!this.initDone){
          this.initDone = true;

          this.view.monthSelector.onChange = (month, year) => {
            this.setMonth({month, year});
            this.onChangeMonth(month, year);
          };
          
          this.view.flxToday.onClick = () => this.jumpToToday();

          this.initDimension();
          this.initWeekdays();
        }
      };

      this.view.postShow = () => {
        const dateToSet = this.getDate(this.selectedDate);
        this.setMonth({month: dateToSet.getMonth() + 1, year: dateToSet.getFullYear()});
      };
    },

    initDimension(){
      for(let i = 1; i <= 6; i++){
        this.view[`week${i}`].height = `${this.weekRowHeight}dp`;
      }
      const width = parseInt(this.view.width.replaceAll('dp', ''));
      this.view.topCalendar.width = `${width - 20}dp`;
    },
    
    initWeekdays(){
      const weekdays = new Array(7);
      const todayTime = new Date().getTime();
      for(let i = 0; i < 7; i++){
        const date = new Date(todayTime + (i * SECONDS * 1000));
        let currentLocale = voltmx.i18n.getCurrentLocale();
        currentLocale = currentLocale ? currentLocale.split('_')[0] : 'en-US';
        let weekday = date.toLocaleString(currentLocale, {weekday: 'long'});
        weekday = weekday.substring(0, 1).toUpperCase() + weekday.substring(1, 3);
        weekdays[date.getDay()] = weekday;
      }
      for(let i = 1; i <= 7; i++){
        this.view.weekdays[`lbl${i}`].text = weekdays[i % 7];
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

    jumpToToday(){
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      this.setMonth({month, year});
      this.selectDay(this.findDay({month, day}));
      this.onChangeMonth(month, year);

    },

    refresh(){
      const dateArray = this.selectedDate.split('-');
      const year = parseInt(dateArray[0]);
      const month = parseInt(dateArray[1]);
      const day = parseInt(dateArray[2]);
      this.setMonth({month, year});
      const mcd = this.findDay({month, day});
      this.selectDay(mcd);
    },

    setMonth({month, year}){
      const calendarUtils = require('com/hcl/mario/MonthlyCalendarDay/CalendarUtils');
      this.view.monthSelector.year = year;
      this.view.monthSelector.month = month;
      const firstDay = new Date(year, month - 1, 1, 12, 0, 0);
      let firstWeekday = firstDay.getDay();
      firstWeekday = firstWeekday === 0 ? 7 : firstWeekday;
      firstWeekday--;
      let dayOfCalendar = new Date(firstDay.getTime() - (firstWeekday * SECONDS * 1000));
      this.visibleDates = [];
      this.view.week6.isVisible = true;
      for(let i = 1; i <= 6; i++){
        const week = this.view[`week${i}`];
        week.removeAll();
        for(let j = 1; j <= 7; j++){
          const args = {
            id: `${new Date().getTime()}_${i}_${j}`,
            height: `100%`,
            skin: this.getDateAsString(dayOfCalendar) === this.selectedDate ? SKIN_FLX_DAY_SELECTED : SKIN_FLX_DAY
          };

          const mcd = new com.hcl.mario.MonthlyCalendarDay(args, {}, {});
          mcd.month = dayOfCalendar.getMonth() + 1;
          mcd.day = dayOfCalendar.getDate();
          mcd.year = dayOfCalendar.getFullYear();
          if((this.getDateAsString(dayOfCalendar) === this.selectedDate)){
            mcd.skinDay = SKIN_DAY_SELECTED;
          } else if(mcd.month !== month){
            mcd.skinDay = SKIN_DAY_OTHER_MONTH;
          } else if(calendarUtils.isHoliday({day: mcd.day, month: mcd.month, year: mcd.year})){
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
      this.view.height = `${10 + 90 + heightWeeks + 10}dp`;
      this.view.forceLayout();
    },

    selectDay(mcd){
      const calendarUtils = require('com/hcl/mario/MonthlyCalendarDay/CalendarUtils');
      const currentDay = this.getDate(this.selectedDate);
      const currentMcd = this.findDay({
        month: currentDay.getMonth() + 1,
        day: currentDay.getDate()
      });
      if(currentMcd !== null){
        currentMcd.skin = SKIN_FLX_DAY;
        currentMcd.skinDay = (currentMcd.month !== this.view.monthSelector.month) ? SKIN_DAY_OTHER_MONTH : 
        (calendarUtils.isHoliday({day: currentMcd.day, month: currentMcd.month, year: currentMcd.year}) ? SKIN_DAY_HOLIDAY : SKIN_DAY);
      }

      mcd.skin = SKIN_FLX_DAY_SELECTED;
      mcd.skinDay = SKIN_DAY_SELECTED;

      this.selectedDate = this.getDateAsString(new Date(mcd.year, mcd.month - 1, mcd.day));
      this.onSelect(this.selectedDate);
    },

    findDay({day, month}){
      for(let i = 1; i <= 6; i++){
        const week = this.view[`week${i}`];
        for(let j = 0; j < 7; j++){
          const mcd = week.widgets()[j];
          if(mcd.day === day && mcd.month === month){
            return mcd;
          }
        }
      }
      return null;
    },


    getNextDate(date){
      return new Date(date.getTime() + (SECONDS * 1000));
    },

    getDateAsString(date) {
      const addZero = (num) => {
        if(num.length === 1){
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
      const getFirstAvailablePosition = (date) => {
        const dateComponents = date.split('-');
        const mcd = this.findDay({day: parseInt(dateComponents[2]), month: parseInt(dateComponents[1])});
        return mcd.getFirstEmptyLine();
      };
      dayEvents.forEach((dayEvent) => {
        if(eventPosition[dayEvent.id] === undefined){
          const allDays = dayEvents.filter((d) => d.id === dayEvent.id);
          const dateComponents = dayEvent.date.split('-');
          const mcdStart = this.findDay({day: parseInt(dateComponents[2]), month: parseInt(dateComponents[1])});
          eventPosition[dayEvent.id] = mcdStart.getFirstEmptyLine() || eventPosition[dayEvent.id];
          allDays.forEach((event) => {
            const dc = event.date.split('-');
            const mcd = this.findDay({day: parseInt(dc[2]), month: parseInt(dc[1])});
            let space = 'none';
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
              const isSameMonth = this.view.monthSelector.month === mcd.month;
              skinAll = isSameMonth ? eventType.skinAll || 'slFbox' : 'slFBox';
              skinPartial = isSameMonth ? eventType.skinPartial || 'slFbox' : 'slFbox';
            }

            mcd.addEventLine({
              eventId: event.id, 
              space, 
              position: eventPosition[event.id], 
              skinAll, 
              skinPartial
            });     
          });
        }
      });
    },

    resetDayEvents(){
      for(let i = 1; i <= 6; i++){
        const week = this.view[`week${i}`];
        for(let j = 0; j < 7; j++){
          const mcd = week.widgets()[j];
          mcd.resetEventLines();
        }
      }
    }
  };
});