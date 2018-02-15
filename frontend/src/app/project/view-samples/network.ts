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
                    'height': 'mapData(size, 0, 10000, 20, 50)',
                    'width': 'mapData(size, 0, 10000, 20, 50)'
                  }
                },
            
                {
                  selector: 'edge',
                  style: {
                    'width': 'mapData(weight, 0, 20000, 1, 50)',
                    // 'curve-style': 'bezier',
                    'line-style': 'solid',
                    'line-color': 'black',
                    // 'edge-distances': 'control-point-weight',
                    'opacity': 0.5,
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
              minZoom: 0.01,
              maxZoom: 10,
              zoomingEnabled: true,
              boxSelectionEnabled: true,
              motionBlur: true,
              motionBlurOpacity: 0.1,


        });
    
    }

}