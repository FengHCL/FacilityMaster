define(function() {

  return {
    constructor(baseConfig, layoutConfig, pspConfig) {
      this.view.flxBackground.onClick = () => this.view.isVisible = false;
      this.view.cmpCalendar.onSelect = (selectedDate) => {
        this.view.isVisible = false;
        this.onSelect(selectedDate, this.widgetId);
      };
    },
    
    initGettersSetters() {
      defineGetter(this, 'widgetId', () => {
        return this._widgetId;
      });
      defineSetter(this, 'widgetId', value => {
        this._widgetId = value;
      });
    },

    show(selectedDate, widgetId){
      this.widgetId = widgetId;
      if(selectedDate){
        this.view.cmpCalendar.selectedDate = selectedDate;
        this.view.cmpCalendar.refresh();
      }
      this.view.isVisible = true;
    },
    
    onSelect(){}
  };
});