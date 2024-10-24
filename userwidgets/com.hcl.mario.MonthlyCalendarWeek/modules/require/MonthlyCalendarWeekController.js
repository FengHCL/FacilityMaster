define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      
      removeAll(){
        this.view.removeAll();
      },
      
      add(widget){
        this.view.add(widget);
      },
      
      widgets(){
        return this.view.widgets();
      }
	};
});