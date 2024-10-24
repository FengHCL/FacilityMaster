define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.onClick = () => this.onOpenSelector();
    },
    
    initGettersSetters: function() {

    },

    onOpenSelector(){}
  };
});