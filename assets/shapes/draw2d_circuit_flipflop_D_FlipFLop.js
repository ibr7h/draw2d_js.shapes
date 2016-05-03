// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_flipflop_D_FlipFLop = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_flipflop_D_FlipFLop",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:62.7199999999998,height:51.5},attr), setter, getter);
     var port;
     // out_q
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.61499521683659, 27.68155339805798));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("out_q");
     port.setMaxFanOut(20);
     // input_t
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-3.188775510204092, 50.98252427184438));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input_t");
     port.setMaxFanOut(20);
     // input_d
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-1.594387755102046, 19.203883495145384));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input_d");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 62.7199999999998;
      this.originalHeight= 51.5;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L62.7199999999998,0 L62.7199999999998,51.5 L0,51.5");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M2.5,2.5Q2.5,1.5 3.5, 1.5L61.5,1.5Q62.5,1.5 62.5, 2.5L62.5,50.5Q62.5,51.5 61.5, 51.5L3.5,51.5Q2.5,51.5 2.5, 50.5L2.5,2.5');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'D');
        shape.attr({"x":4,"y":11,"text-anchor":"start","text":"D","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'T');
        shape.attr({"x":14.576375000000098,"y":26.576312499999858,"text-anchor":"start","text":"T","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Rectangle
        shape = this.canvas.paper.path('M52.82600000000002 26.077999999999975L61.82600000000002 26.077999999999975L61.82600000000002 51.077999999999975L52.82600000000002 51.077999999999975Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#000000","opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M2.5 21.255999999999858L14.541999999999916 26.161999999998898L2.5 31.51399999999967Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#171717","opacity":1});
        shape.data("name","Rectangle");
        
        // Line_shadow
        shape = this.canvas.paper.path('M13.984000000000378 1.885999999996784L14.187200000000303,51.312799999995605');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M13.984000000000378 1.885999999996784L14.187200000000303,51.312799999995605');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M42.12279999999919 6.439599999997881L56.5979999999995,6.399999999997817L56.5979999999995,16.657999999997628');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M42.12279999999919 6.439599999997881L56.5979999999995,6.399999999997817L56.5979999999995,16.657999999997628');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M62.7199999999998 25.740000000000236L22.13399999999774,26.18600000000015');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M62.7199999999998 25.740000000000236L22.13399999999774,26.18600000000015');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"opacity":1});
        shape.data("name","Line");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_flipflop_D_FlipFLop = draw2d_circuit_flipflop_D_FlipFLop.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

        this.attr({resizeable:false});
    },
    
    calculate:function()
    {
        var i1 = this.getInputPort(0);
        var i2 = this.getInputPort(1);
        var o1 = this.getOutputPort(0);
        
        o1.setValue(i1.getValue() & i2.getValue());
    }
});
draw2d_circuit_flipflop_D_FlipFLop.logic="calculate: function () {\n    var i1 = this.getInputPort(0);\n    var i2 = this.getInputPort(1);\n    var o1 = this.getOutputPort(0);\n    o1.setValue(i1.getValue() & i2.getValue());\n}";
draw2d_circuit_flipflop_D_FlipFLop.github="./shapes/org/draw2d/circuit/flipflop/D_FlipFLop.shape";
draw2d_circuit_flipflop_D_FlipFLop.markdown="# AND Gate\n\n## Description\nThe **AND** gate is a basic digital logic gate that implements logical conjunction - it behaves according to the truth table on the bottom.\n\nA HIGH output results only if both the inputs to the AND gate are HIGH. If neither or only one input to the AND gate is HIGH, a LOW output results. In another sense, the function of AND effectively finds the minimum between two binary digits, just as the OR function finds the maximum.\n\n\n**Therefore, the output is always 0 except when all the inputs are 1.**\n\n## Logic table\n\n| INPUT 1   | INPUT   |  OUTPUT    |\n|:---------:|:-------:|:----------:|\n| Low       | Low     |  Low       |\n| High      | Low     |  Low       |\n| Low       | High    |  Low       |\n| High      | High    |  `High`    |\n\n";