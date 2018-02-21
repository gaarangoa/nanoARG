declare var cytoscape: any;
declare var panzoom: any;
import 'cytoscape/dist/cytoscape.js';
import { max } from 'rxjs/operator/max';

export class Network {

    public network: any;

    constructor(){
    
    }
    
    render(placeholder: string, data: any){
      var _max = 0;
      var _min = 9999999999999;
      data.nodes.forEach(e => {
        e.data.size = Math.log(e.data.size)
        if( e.data.size < _min ) {_min = e.data.size}
        if( e.data.size > _max ) {_max = e.data.size}
      });

      var _emax = 0;
      var _emin = 999999999999; 
      data.edges.forEach(e => {
        e.data.weight = Math.log(e.data.weight)
        if( e.data.weight < _emin ) {_emin = e.data.weight}
        if( e.data.weight > _emax ) {_emax = e.data.weight}
      });

        this.network = new cytoscape({

            container: document.getElementById(placeholder),
            elements: data,
              style: [ // the stylesheet for the graph
                {
                  selector: 'node',
                  style: {
                    'background-color': function(e){
                      if(e.data("origin") === 9){
                        return "red"
                      }else{
                      if(e.data("origin") === 10){
                        return "yellow"}
                      else {
                        return e.data('color')
                      }}
                    },
                    'background-opacity': 1,
                    'border-color': '#000',
                    'border-width': 1,
                    'label': 'data(id)',
                    'font-size': 20,
                    'font-family': '"Lato", sans-serif',
                    'shape': function(e){if(e.data("origin") >= 9){return "star"}else{return "ellipse"}},
                    'padding': '30%',
                    'height': 'mapData(size, '+_min+', '+_max+', 20, 50)',
                    'width': 'mapData(size, '+_min+', '+_max+', 20, 50)'
                  }
                },
            
                {
                  selector: 'edge',
                  style: {
                    'width': 'mapData(weight, '+_emin+', '+_emax+', 1, 30)',
                    'curve-style': 'unbundled-bezier',
                    'line-style': 'solid',
                    'line-color': '#b8c1db',
                    // 'edge-distances': 'control-point-weight',
                    'opacity': 0.5,
                    // 'target-arrow-color': '#000',
                    // 'target-arrow-shape': 'triangle'
                  }
                },


              ],
            
              layout: {
                name: 'concentric',
                fit: true,
                circle: false,
                directed: true,
                avoidOverlap: true,
                animate: false,
                componentSpacing: 40,
                nodeRepulsion: function( node ){ return 120000*node.data('size'); },
                nodeOverlap: 200,
                padding: 100
              },

              zoom: 0,
              minZoom: 0.4,
              maxZoom: 10,
              zoomingEnabled: true,
              boxSelectionEnabled: true,
              motionBlur: true,
              motionBlurOpacity: 0.1,


        });
    
    }

}