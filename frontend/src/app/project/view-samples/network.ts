declare var cytoscape: any;
declare var panzoom: any;
import 'cytoscape/dist/cytoscape.js';

export class Network {

    public network: any;

    constructor(){
    
    }
    render(placeholder: string, data: any){
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
                    // 'shape': data(shape),
                    'padding': '30%',
                    'height': 'mapData(size, 0, 10000, 10, 200)',
                    'width': 'mapData(size, 0, 10000, 10, 200)'
                  }
                },
            
                {
                  selector: 'edge',
                  style: {
                    'width': 'mapData(weight, 0, 20000, 20, 200)',
                    // 'curve-style': 'bezier',
                    'line-style': 'solid',
                    'line-color': 'data(color)',
                    // 'edge-distances': 'control-point-weight',
                    'opacity': 0.6,
                    'target-arrow-color': '#000',
                    'target-arrow-shape': 'triangle'
                  }
                },


              ],
            
              layout: {
                name: 'concentric',
                rows: 5,
                fit: true
              },

              zoom: 0.5,
              minZoom: 0.001,
              maxZoom: 10,
              zoomingEnabled: true,
              boxSelectionEnabled: true,
              motionBlur: true,
              motionBlurOpacity: 0.1,


        });
    
    }

}