define(function() {

  return {
    constructor(baseConfig, layoutConfig, pspConfig) {},
    
    initGettersSetters() {
      defineGetter(this, 'space', () => {
        return this._space;
      });
      defineSetter(this, 'space', value => {
        this._space = value;
        this.view.flxCenter.isVisible = (value === 'center' || value === 'left' || value === 'right');
        this.view.flxRight.isVisible = (value === 'right' || value === 'all');
        this.view.flxLeft.isVisible = (value === 'left' || value === 'all');
      });
      defineGetter(this, 'eventId', () => {
        return this._eventId;
      });
      defineSetter(this, 'eventId', value => {
        this._eventId = value;
      });
    },
    
    reset(){
      this.view.flxCenter.skin = 'slFbox';
      this.view.flxRight.skin = 'slFbox';
      this.view.flxLeft.skin = 'slFbox';
      this.space = 'none';
      this.eventId = null;
    }
  };
});