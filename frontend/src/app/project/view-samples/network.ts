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
        if( e.data.size < _min ) {_min = e.data.size}
        if( e.data.size > _max ) {_max = e.data.size}
      });

      var _emax = 0;
      var _emin = 999999999999; 
      data.edges.forEach(e => {
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
                    'background-color': 'data(color)',
                    'background-opacity': 1,
                    'border-color': '#000',
                    'border-width': 2,
                    'label': 'data(id)',
                    'font-size': 20,
                    'font-family': '"Lato", sans-serif',
                    'shape': 'function(e){if(e.origin==9){return "octagon"}else{return "ellipse"}}',
                    'padding': '30%',
                    'height': 'mapData(size, '+_min+', '+_max+', 30, 50)',
                    'width': 'mapData(size, '+_min+', '+_max+', 30, 50)'
                  }
                },
            
                {
                  selector: 'edge',
                  style: {
                    'width': 'mapData(weight, '+_emin+', '+_emax+', 1, 50)',
                    // 'curve-style': 'bezier',
                    'line-style': 'solid',
                    'line-color': 'black',
                    // 'edge-distances': 'control-point-weight',
                    'opacity': 0.3,
                    'target-arrow-color': '#000',
                    'target-arrow-shape': 'triangle'
                  }
                },


              ],
            
              layout: {
                name: 'concentric',
                fit: true,
                avoidOverlap: true
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