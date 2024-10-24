define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        if(!this.initDone){
          this.view.flxLeft.onClick = () => {
            let previousMonth = this.month - 1;
            if(previousMonth === 0){
              previousMonth = 12;
              this.year--;
            }
            this.month = previousMonth;
            this.onChange(previousMonth, this.year);
          };

          this.view.flxRight.onClick = () => {
            let nextMonth = this.month + 1;
            if(nextMonth === 13){
              nextMonth = 1;
              this.year++;
            }
            this.month = nextMonth;
            this.onChange(nextMonth, this.year);
          };
          this.initDone = true;
        }
      };
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'year', () => {
        return this._year;
      });
      defineSetter(this, 'year', value => {
        this._year = value;
      });
      defineGetter(this, 'month', () => {
        return this._month;
      });
      defineSetter(this, 'month', value => {
        this._month = value;
        const date = new Date();
        date.setDate(15);
        date.setMonth(value - 1);
        let currentLocale = voltmx.i18n.getCurrentLocale();
        currentLocale = currentLocale ? currentLocale.split('_')[0] : 'en-US';
        let month = date.toLocaleString(currentLocale, {month: 'long'});
        month = month.substring(0, 1).toUpperCase() + month.substring(1);
        this.view.lblMonth.text = `${month} ${this.year}`;
      });
    },
    
    onChange(month, year){}
  };
});