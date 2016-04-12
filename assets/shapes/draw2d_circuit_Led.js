// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_Led = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_Led",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:39,height:32},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(12.820512820512821, 50));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#C02B1D");
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 39;
      this.originalHeight= 32;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L39,0 L39,32 L0,32");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":15,"ry":16,"cx":24,"cy":16,"stroke":"#1B1B1B","stroke-width":2,"fill":"#FFFFFF","opacity":1});
        shape.data("name","circle");
        
        // Line_shadow
        shape = this.canvas.paper.path('M3995.5 3989.5L4014.5,4010.5');
        shape.attr({"stroke-width":null,"stroke":"none"});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M3995.5 3989.5L4014.5,4010.5');
        shape.attr({});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M4014.5 3990.5L3994.5,4010.5');
        shape.attr({"stroke-width":null,"stroke":"none"});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M4014.5 3990.5L3994.5,4010.5');
        shape.attr({});
        shape.data("name","Line");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
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
draw2d_circuit_Led = draw2d_circuit_Led.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         this.attr({resizeable:false});
         var _this = this;
 
         this.getInputPort(0).on("change:value", function(emitter, event){
             _this._state(event.value);
         });
         
         this.on("added",function(){
            _this._state(false);
         });
    },
    
    _state:function(flag){
         if(flag){
             this.layerAttr("circle",{fill:"#FF0000"});
         }
         else{
            this.layerAttr("circle",{fill:"#00FF00"});
         }
    }

});