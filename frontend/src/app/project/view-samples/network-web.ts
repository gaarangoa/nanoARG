// // declare var cytoscape: any;
// // declare var jquery: any;
// // declare var panzoom: any;
// // var jquery = require('jquery/jquery.js');
// declare var options: any;
// declare var cerebral_style: any;
// declare var cerebral_ready: any;

// var cytoscape = require('cytoscape/dist/cytoscape.js');
// var cerebral = require('assets/js/layout.horizontal.js');

// // var contextMenus = require('cytoscape-context-menus/cytoscape-context-menus.js');
// // import 'cytoscape-panzoom';

// import { max } from 'rxjs/operator/max';

// // register extension
// // contextMenus( cytoscape, jquery );
// // panzoom( cytoscape )


// export class NetworkWeb {

//     public network: any;
//     public elements_preloaded: any;

//     constructor() {
//         this.elements_preloaded = [
//             {
//                "data": {
//                 "id": "1",
//                 "name": "Node 1",
//                 "localization": "Nucleus",
//                 "color": defaultNodeColor
//               },
//               "group": "nodes"
//             },
//             {
//               "data": {
//                 "id": "2",
//                 "name": "Node 2",
//                 "localization": "Extracellular",
//                 "color": defaultNodeColor
//               },
//               "group": "nodes"
//             },
//             {
//               "data": {
//                 "id": "3",
//                 "name": "Node 3",
//                 "localization": "Cytoplasm",
//                 "color": defaultNodeColor
//               },
//               "group": "nodes"
//             },
//             {
//               "data": {
//                 "id": "12",
//                 "name": "name of interaction 12",
//                 "source": "1",
//                 "target": "2",
//                 "idgroup": "12"
//               },
//               "group": "edges"
//             },
//             {
//               "data": {
//                 "id": "23",
//                 "name": "name of interaction 23",
//                 "source": "2",
//                 "target": "3",
//                 "idgroup": "23"
//               },
//               "group": "edges"
//             },
//             {
//               "data": {
//                 "id": "22",
//                 "name": "name of interaction 22",
//                 "source": "2",
//                 "target": "2",
//                 "idgroup": "22"
//               },
//               "group": "edges"
//             },
//         ];

//         this.network = new cytoscape({
//             container: '#netexample',
//             layout: options,
//             showOverlay: false,
//             zoom: 1,
//             style: cerebral_style,
//             elements: this.elements_preloaded,
//         });

//         cerebral_ready(this.network);

//     }

// }