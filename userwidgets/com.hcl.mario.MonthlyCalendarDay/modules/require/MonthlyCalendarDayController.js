define(function() {
  const SKIN_PARTIAL_HOLIDAY = 'skinPartialHoliday';
  const SKIN_CENTER_HOLIDAY = 'skinCenterHoliday';

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        if(!this.initDone){
          this.initDone = true;
        }
      };
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'month', () => {
        return this._month;
      });
      defineSetter(this, 'month', value => {
        this._month = value;
      });
      defineGetter(this, 'day', () => {
        return this._day;
      });
      defineSetter(this, 'day', value => {
        this._day = value;
        this.view.lblDay.text = `${ value }`;
      });
      defineGetter(this, 'year', () => {
        return this._year;
      });
      defineSetter(this, 'year', value => {
        this._year = value;
      });
    },

    getDate(){
      const addZero = (num) => {
        num = `${num}`;
        if(num.length === 1){
          return `0${num}`;
        }
        return num;
      };

      return `${this.year}-${addZero(this.month)}-${addZero(this.day)}`;
    },

    addEventLine({eventId, space, position, skinAll, skinPartial}){
      const weekDay = new Date(this.year, this.month - 1, this.day).getDay();
      const dayEventLine = this.view[`dayEventLine${position}`];
      dayEventLine.eventId = eventId;
      dayEventLine.space = space;
      const calendarUtils = require('com/hcl/mario/MonthlyCalendarDay/CalendarUtils');
      dayEventLine.skinLeft = calendarUtils.isHoliday({day: this.day, month: this.month, year: this.year}) ? SKIN_PARTIAL_HOLIDAY : skinPartial;
      dayEventLine.skinRight = calendarUtils.isHoliday({day: this.day, month: this.month, year: this.year}) ? SKIN_PARTIAL_HOLIDAY : skinPartial;
      dayEventLine.skinCenter = calendarUtils.isHoliday({day: this.day, month: this.month, year: this.year}) ? SKIN_CENTER_HOLIDAY : skinAll;
    },
    
    resetEventLines(){
      this.view.flxEvents.widgets().forEach((eventLine) => eventLine.reset());
    },

    getFirstEmptyLine(){
      let ret = 0;
      for(let i = 1; i <= 5; i++){
        if(this.view.flxEvents.widgets()[i - 1].space === 'none'){
          ret = i;
          break;
        }
      }
      return ret;
    },

    onDayClick(){}
  };
});