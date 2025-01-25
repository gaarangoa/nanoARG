// declare var cytoscape: any;
// declare var jquery: any;
// declare var panzoom: any;
// var jquery = require('jquery/jquery.js');
const cytoscape = require('cytoscape/dist/cytoscape.js');
const cytoscape_cose = require('cytoscape-cose-bilkent/cytoscape-cose-bilkent.js');
// const cytoscape_expand_collapse = require('cytoscape-expand-collapse/cytoscape-expand-collapse.js');

cytoscape.use(cytoscape_cose);

// var contextMenus = require('cytoscape-context-menus/cytoscape-context-menus.js');
// import 'cytoscape-panzoom';

import { max } from 'rxjs/operator/max';

// register extension
// contextMenus( cytoscape, jquery );
// panzoom( cytoscape )

export class Network {
  public network: any;

  constructor() {}

  render(placeholder: string, data: any, conditions: any) {
    // console.log(data);

    // conditions is a vector with the id of the data to be analyzed.
    // conditions = [4, 1]; // this example would only show the genes ARGs and MGEs
    const linked_nodes = {};

    // traverse edges and get only the ones that are of interest
    let _emax = 0;
    let _emin = 999999999999;
    const edges = [];
    data.edges.forEach(e => {
      e.data.counts = e.data.weight;
      e.data.weight = Math.log(e.data.weight + 1);
      if (e.data.weight < _emin) {
        _emin = e.data.weight;
      }
      if (e.data.weight > _emax) {
        _emax = e.data.weight;
      }

      if (
        conditions.indexOf(e.data.source_origin) > -1 &&
        conditions.indexOf(e.data.target_origin) > -1
      ) {
        edges.push(e);
        linked_nodes[e.data.source] = true;
        linked_nodes[e.data.target] = true;
      }
    });

    // console.log(linked_nodes);
    // traverse nodes and get the ones that are of interest
    // Here make sure to select only the nodes that contain at least one edge. Singletons are discarded.

    let _max = 0;
    let _min = 9999999999999;
    const nodes = [];
    // var parents = [];

    // add parent nodes
    conditions.forEach(e => {
      nodes.push({
        data: {
          id: e,
          counts: 1,
          // position: {x: 1, y: 2},
          // size: 20,
          origin: 1,
          color: 'rgba(255,255,255,0.9)',
          metadata: false,
          // size: 0.1,
          // start: 1,
          // end: 2,
        }
      });
    });

    // if ARGs are selected
    if (conditions.indexOf(1) > -1) {
      let _arg_categories = [];
      data.nodes.forEach(e => {
        if (e.data.origin === 1) {
          _arg_categories.push(e.data.metadata[3]);
        }
        return [e.data.metadata[3], e.data.origin];
      });

      _arg_categories = Array.from(new Set(_arg_categories));

      // create the nodes for the arg_categories
    _arg_categories.forEach(e => {


        nodes.push({
          data: {
            id: e,
            counts: 1,
            origin: 1,
            color: 'rgba(255,255,255,0.9)',
            metadata: false,
          }
        });
      });
    }

    let parents = []
    data.nodes.forEach(e => {
      e.data.counts = e.data.size;
      // e.data.group = e.data.metadata[2];
      if (e.data.origin === 1) {
        e.data.parent = e.data.metadata[3];
      } else {
        e.data.parent = e.data.origin;
      }

    //   parents.push(e.data.parent);

      e.data.size = Math.log(e.data.size + 1);
      if (e.data.size < _min) {
        _min = e.data.size;
      }
      if (e.data.size > _max) {
        _max = e.data.size;
      }

      // filter genes that are not in the conditions list
      if (conditions.indexOf(e.data.origin) > -1 && linked_nodes[e.data.id]) {
        nodes.push(e);
      }

    });

    var filtered_nodes = nodes.filter(function(value, index, arr){

        if (value['data']['metadata'] != false) {
            return value;
        }

    });

    const mydata = { nodes: nodes, edges: edges };
    // console.log(mydata)

    this.network = new cytoscape({
      container: document.getElementById(placeholder),
      elements: mydata,
      style: [
        // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            'background-color': function(e) {
              if (e.data('origin') === 9) {
                return 'red';
              } else {
                if (e.data('origin') === 10) {
                  return 'yellow';
                } else {
                  return e.data('color');
                }
              }
            },
            'background-opacity': 0.8,
            'border-color': '#000',
            'border-width': 1,
            label: 'data(id)',
            'font-size': 20,
            'font-family': '"Lato", sans-serif',
            shape: function(e) {
              if (e.data('origin') >= 9) {
                return 'star';
              } else {
                return 'ellipse';
              }
            },
            padding: '30%',
            height: 'mapData(size, ' + _min + ', ' + _max + ', 20, 50)',
            width: 'mapData(size, ' + _min + ', ' + _max + ', 20, 50)'
          }
        },

        {
          selector: 'edge',
          style: {
            width: 'mapData(weight, ' + _emin + ', ' + _emax + ', 1, 10)',
            'curve-style': 'unbundled-bezier',
            'line-style': 'solid',
            'line-color': '#b8c1db',
            // 'edge-distances': 'control-point-weight',
            opacity: 0.6
            // 'target-arrow-color': '#000',
            // 'target-arrow-shape': 'triangle'
          }
        },
        {
          selector: ':parent',
          style: {
            'background-opacity': 0.333
          }
        }
      ],

      layout: {
        name: 'cose-bilkent',
        animate: false,
        nodeDimensionsIncludeLabels: false,
        refresh: 30,
        tile: true,
        numIter: 500,
        padding: 1
        // fit: true,
        // circle: false,
        // directed: true,
        // avoidOverlap: true,
        // animate: false,
        // componentSpacing: 20,
        // nodeRepulsion: function(node) {
        //   return 120000 * node.data('size');
        // },
        // idealEdgeLength: function(edge) {
        //   return 0.1 * edge.data('weight');
        // },
        // graviti: 0.8,
        // numIter: 5000,
        // nodeOverlap: 200,
        // padding: 100
      },

      zoom: 2,
      minZoom: 0.01,
      maxZoom: 10,
      zoomingEnabled: true,
      boxSelectionEnabled: true,
      motionBlur: true,
      motionBlurOpacity: 0.1
    });

    this.network.on('click', function (e) {
        var ele = e.target;

        e.cy.nodes().style({ 'background-opacity': 0.1 })
        e.cy.nodes().style({ 'border-opacity': 0.1 })
        e.cy.nodes().style({ 'text-opacity': 0.1 })
        e.cy.edges().style({ 'opacity': 0.1 })

        if (ele.connectedEdges().style()['line-color'] == '#b8c1db') {

            ele.outgoers().style({ 'background-opacity': 1.0 });
            ele.incomers().style({ 'background-opacity': 1.0 });
            ele.outgoers().style({ 'border-opacity': 1.0 });
            ele.incomers().style({ 'border-opacity': 1.0 });
            ele.outgoers().style({ 'text-opacity': 1.0 });
            ele.incomers().style({ 'text-opacity': 1.0 });
            ele.style({ 'text-opacity': 1.0 })
            ele.style({ 'border-opacity': 1.0 })
            ele.style({ 'background-opacity': 1.0 })

            ele.connectedEdges().style({ 'line-color': '#b8c1dc', 'opacity': 1.0 });

        } else {
            e.cy.nodes().style({ 'background-opacity': 0.9 })
            e.cy.nodes().style({ 'border-opacity': 0.9 })
            e.cy.nodes().style({ 'text-opacity': 0.9 })
            e.cy.edges().style({ 'opacity': 0.9 })

            ele.connectedEdges().style({ 'line-color': '#b8c1db' });

    }
    });

  }
}
