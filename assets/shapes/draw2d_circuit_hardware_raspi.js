// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_hardware_raspi = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_hardware_raspi",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:105,height:199},attr), setter, getter);
     var port;
     // gpio_1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-1.8934664340984106, 10.4025000000001));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_1");
     port.setMaxFanOut(1);
     // gpio_2
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-1.8934664340984106, 22.235678391959695));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_2");
     port.setMaxFanOut(1);
     // gpio_3
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-1.8934664340984106, 33.32684673366851));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_3");
     port.setMaxFanOut(1);
     // gpio_4
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-1.8934664340984106, 45.37244974874386));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_4");
     port.setMaxFanOut(1);
     // gpio_5
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-1.8934664340984106, 56.841645728643314));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_5");
     port.setMaxFanOut(1);
     // gpio_6
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-1.8934664340984106, 68.4050628140704));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_6");
     port.setMaxFanOut(1);
     // gpio_7
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-1.8934664340984106, 79.62192211055265));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpio_7");
     port.setMaxFanOut(1);
     // Port
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-1.8934664340984106, 90.71976130653272));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(1);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 105;
      this.originalHeight= 199;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L105,0 L105,199 L0,199");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M105,197Q105,199 103, 199L2,199Q0,199 0, 197L0,2Q0,0 2, 0L103,0Q105,0 105, 2L105,197');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'GPIO');
        shape.attr({"x":33.936460244196496,"y":18.436499999999796,"text-anchor":"start","text":"GPIO","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'1');
        shape.attr({"x":7.011860244196669,"y":21.859375,"text-anchor":"start","text":"1","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'2');
        shape.attr({"x":9.011860244196669,"y":45.295874999999796,"text-anchor":"start","text":"2","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'3');
        shape.attr({"x":9.011860244196669,"y":67.89887499999986,"text-anchor":"start","text":"3","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'4');
        shape.attr({"x":9.011860244196669,"y":90.89887499999986,"text-anchor":"start","text":"4","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'5');
        shape.attr({"x":9.011860244196669,"y":114.27327500000001,"text-anchor":"start","text":"5","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'6');
        shape.attr({"x":9.011860244196669,"y":137.0413749999998,"text-anchor":"start","text":"6","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'7');
        shape.attr({"x":10.011860244196669,"y":159.12607500000013,"text-anchor":"start","text":"7","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'8');
        shape.attr({"x":10.011860244196669,"y":181.59375,"text-anchor":"start","text":"8","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":15.5,"ry":16.5,"cx":52.47646024419646,"cy":59.39887499999986,"stroke":"none","stroke-width":0,"fill":"#000000","opacity":1});
        shape.data("name","Circle");
        
        // Rectangle
        shape = this.canvas.paper.path('M58.0604802441967 50.105025000000296L46.91936024419692 50.105025000000296L46.91936024419692 40.274625000000015L58.0604802441967 40.274625000000015Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#000000","opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M45.231215107441585,73.68742174722047Q44.74756155235673,71.32120856431811 48.40733600532576, 70.53730360715895L48.40733600532576,70.53730360715895Q52.06711045829479,69.75339864999978 55.29738818166334, 70.42978257348136L55.29738818166334,70.42978257348136Q58.52766590503188,71.10616649696294 58.7235130746144, 73.57990071354288L58.7235130746144,73.57990071354288Q58.91936024419692,76.05363493012283 55.20461187939668, 77.32220267578282L55.20461187939668,77.32220267578282Q51.489863514596436,78.59077042144281 48.60236608856144, 77.32220267578282L48.60236608856144,77.32220267578282Q45.71486866252644,76.05363493012283 45.231215107441585, 73.68742174722047L45.231215107441585,73.68742174722047');
        shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#B3003B","opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M69.76058518903733,42.684774099766614Q68.04013458284862,46.295874999999796 64.04186434134924, 46.17825240038365L59.990554891137734,46.05906947361763Q55.99228464963835,45.941446874001485 55.746032192431805, 41.9490341038436L55.69572543740333,41.133426684209084Q55.44947298019679,37.1410139140512 57.86565976809379, 35.07721283353885L57.86565976809379,35.07721283353885Q60.281846555990796,33.0134117530265 63.23490425588716, 32.42600568051239L63.23490425588716,32.42600568051239Q66.18796195578352,31.838599607998276 70.1569932778643, 32.33537960391366L70.46717573811796,32.37420329383533Q74.43620706019874,32.87098328975071 72.71575645401003, 36.482084189983894L69.76058518903733,42.684774099766614');
        shape.attr({"stroke":"#000000","stroke-width":2,"fill":"#6B8E23","opacity":1});
        shape.data("name","Rectangle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":5.5,"ry":5.5,"cx":52.41936024419692,"cy":65.10027500000024,"stroke":"#000000","stroke-width":1,"fill":"#B3003B","opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":4,"ry":4.5,"cx":57.338860244196894,"cy":55.82042500000034,"stroke":"none","stroke-width":0,"fill":"#B3003B","opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":4,"ry":4.5,"cx":48.838860244196894,"cy":55.32042500000034,"stroke":"none","stroke-width":0,"fill":"#B3003B","opacity":1});
        shape.data("name","Circle");
        
        // Rectangle
        shape = this.canvas.paper.path('M55.146968662526206,39.09992905405329Q53.52196866252643,42.84992905405397 49.52196866252507, 44.572902027026885L49.52196866252507,44.572902027026885Q45.521968662523705,46.295874999999796 43.178218662525296, 45.383712837837265L43.178218662525296,45.383712837837265Q40.83446866252689,44.471550675674735 39.240718662526206, 42.545874999999114L39.240718662526206,42.545874999999114Q37.64696866252552,40.620199324323494 36.20946866252575, 36.870199324323494L36.20946866252575,36.870199324323494Q34.77196866252598,33.120199324323494 40.64696866252575, 32.208037162161645L40.64696866252575,32.208037162161645Q46.52196866252552,31.295874999999796 51.64696866252575, 33.3229020270262L51.64696866252575,33.3229020270262Q56.77196866252598,35.34992905405261 55.146968662526206, 39.09992905405329L55.146968662526206,39.09992905405329');
        shape.attr({"stroke":"#000000","stroke-width":2,"fill":"#6B8E23","opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M37.33522662061023,64.0007223716168Q37.89848457869448,59.60027500000024 42.04786188256526, 61.61934036716593L42.04786188256526,61.61934036716593Q46.197239186436036,63.63840573433163 46.48460392448101, 67.51343261639295L46.48460392448101,67.51343261639295Q46.77196866252598,71.38845949845427 44.018128774440584, 71.99436724922725L44.018128774440584,71.99436724922725Q41.26428888635519,72.60027500000024 39.018128774440584, 70.5007223716168L39.018128774440584,70.5007223716168Q36.77196866252598,68.40116974323337 37.33522662061023, 64.0007223716168L37.33522662061023,64.0007223716168');
        shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#B3003B","opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M59.21600119620348,66.51260111401803Q60.036957192047794,63.35769425824128 63.958481781262435, 62.28416780326393L63.958481781262435,62.28416780326393Q67.88000637047708,61.21064134828657 67.80721137441196, 62.112799849468956L67.80721137441196,62.112799849468956Q67.73441637834685,63.01495835065134 67.07688831127189, 67.06178392455286L67.07688831127189,67.06178392455286Q66.41936024419692,71.10860949845437 62.2911308213902, 71.88631594106755L62.2911308213902,71.88631594106755Q58.16290139858347,72.66402238368073 58.27897329947132, 71.16576517673775L58.27897329947132,71.16576517673775Q58.395045200359164,69.66750796979477 59.21600119620348, 66.51260111401803L59.21600119620348,66.51260111401803');
        shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#B3003B","opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M61.482618202281174,53.220872371616906Q62.045876160365424,48.82042500000034 66.1952534642362, 50.839490367166036L66.1952534642362,50.839490367166036Q70.34463076810698,52.85855573433173 70.63199550615195, 56.73358261639305L70.63199550615195,56.73358261639305Q70.91936024419692,60.60860949845437 68.16552035611153, 61.214517249227356L68.16552035611153,61.214517249227356Q65.41168046802613,61.82042500000034 63.16552035611153, 59.720872371616906L63.16552035611153,59.720872371616906Q60.91936024419692,57.62131974323347 61.482618202281174, 53.220872371616906L61.482618202281174,53.220872371616906');
        shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#B3003B","opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M55.402118202281144,45.94533856496514Q55.965376160365395,42.89887499999986 60.11475346423617, 44.29668948496078L60.11475346423617,44.29668948496078Q64.26413076810695,45.6945039699217 64.55149550615192, 48.37721488827174L64.55149550615192,48.37721488827174Q64.8388602441969,51.05992580662178 62.0850203561115, 51.47940040331082L62.0850203561115,51.47940040331082Q59.331180468026105,51.89887499999986 57.0850203561115, 50.44533856496514L57.0850203561115,50.44533856496514Q54.838860244196894,48.99180212993042 55.402118202281144, 45.94533856496514L55.402118202281144,45.94533856496514');
        shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#B3003B","opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M38.38465340077096,50.159288069537524Q41.99733813901594,47.82042500000034 43.61268473824498, 49.667691675325386L43.61268473824498,49.667691675325386Q45.22803133747402,51.51495835065043 44.18395621375862, 55.86243163527183L44.18395621375862,55.86243163527183Q43.13988109004322,60.20990491989323 39.95654447235711, 60.987611362507096L39.95654447235711,60.987611362507096Q36.773207854671,61.76531780512096 35.77258825859849, 57.13173447209783L35.77258825859849,57.13173447209783Q34.77196866252598,52.49815113907471 38.38465340077096, 50.159288069537524L38.38465340077096,50.159288069537524');
        shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#B3003B","opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M47.61310269910723,42.553454946707916Q51.120728147938735,41.89887499999986 53.11310269910723, 42.958627384555484L53.11310269910723,42.958627384555484Q55.105477250275726,44.01837976911111 53.59460569131443, 46.5124675160032L53.59460569131443,46.5124675160032Q52.08373413235313,49.00655526289529 47.55378487274197, 49.66746349624805L47.55378487274197,49.66746349624805Q43.023835613130814,50.3283717296008 43.56465643170327, 46.76820331150839L43.56465643170327,46.76820331150839Q44.105477250275726,43.20803489341597 47.61310269910723, 42.553454946707916L47.61310269910723,42.553454946707916');
        shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#B3003B","opacity":1});
        shape.data("name","Rectangle");
        
        // Line_shadow
        shape = this.canvas.paper.path('M65.5 38.5L63.5,39.5Q62.057292052200864,40.15600319199939 60.5, 41.5L59.5,43.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M65.5 38.5L63.5,39.5Q62.057292052200864,40.15600319199939 60.5, 41.5L59.5,43.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M48.5 42.5L47.5,40.5Q46.42905320419732,38.90872203999788 44.5, 37.5L42.5,36.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M48.5 42.5L47.5,40.5Q46.42905320419732,38.90872203999788 44.5, 37.5L42.5,36.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"opacity":1});
        shape.data("name","Line");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      if(this.svgNodes===null) return null;

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
     if(this.svgNodes===null) return;

     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(this.svgNodes===null) return;

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

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
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
draw2d_circuit_hardware_raspi = draw2d_circuit_hardware_raspi.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         // your special code here
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function()
    {
        this.getInputPorts().each(function(index,port){
            if(port.hasChangedValue() && port.getConnections().getSize()>0){
                raspi.gpio(port.getName(), port.getValue());
            }
        });
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function()
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function()
    {
    }
});
draw2d_circuit_hardware_raspi.github="./shapes/org/draw2d/circuit/hardware/raspi.shape";