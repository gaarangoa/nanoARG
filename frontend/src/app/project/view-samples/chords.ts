declare var Circos: any;
import 'circos/dist/circos.js';

export class Chords {

    public circos: any;
    public conf1: any;
    public origin_1: any;
    public origin_2: any;
    public origin_3: any;
    public origin_4: any;
    public read: any;
    public data: any;
    public width: any;
    public height: any;
    public length_dist: any;

    constructor() {
        this.width = 600;
        this.height = 600;

        this.conf1 = {
            innerRadius: (this.height / 2.8) - 2,
            outerRadius: this.height / 2.8,
            cornerRadius: 10,
            color: 'rgba(0,0,0,1)',
            gap: 0.04, // in radian
            labels: {
              display: true,
              position: 'center',
              size: '1px',
              color: 'rgba(0,0,0,1)',
              radialOffset: 20,
            },
            ticks: {
              display: false,
              color: 'rgba(0,0,0,0.5)',
              spacing: 5000,
              labels: true,
              labelSpacing: 1,
              labelSuffix: 'k',
              labelDenominator: 1000,
              labelDisplay0: true,
              labelSize: '4em',
              labelColor: 'rgba(10,30,20,0.8)',
            //   labelFont: '"Lato", sans-serif',
              majorSpacing: 1,
              size: {
                minor: 2,
                major: 5,
              }
            },
            events: {}
        };

        this.origin_1 = {
            innerRadius: (this.height / 3) - 15,
            outerRadius: this.height / 3,
            min: null,
            max: null,
            color: function(d) { return d.color; },
            strokeColor: function(d) { return 'black'; },
            strokeWidth: function(d){return d.stroke_width;},
            // opacity: function(d) { if (d.origin === 1) { return d.opacity; }else { return 0; }},
            logScale: false,
            tooltipContent: function(d){ return d.value; },
            events: {}
        };

        this.origin_2 = {
            radius: (this.height / 3) - 15,
            color: function(d) { return (d.target.id === "ARGs") ? d.target.color : d.source.color },
            strokeColor: function(d) { return 'black'; },
            strokeWidth: function(d){return 1;},
            opacity: function(d){ return (  (d.source.id === "ARGs" || d.target.id == "ARGs") && (d.source.id === 'ARGs' || d.source.id !== "Bacteria") && (d.target.id === "ARGs" || d.target !== "Bacteria") ) ? 0.9 : 0.2 } ,
            // opacity: function(d) { if (d.origin === 4) { return d.opacity; }else { return 0; }},
            logScale: false,
            tooltipContent: function(d){},
            events: {
                'click': function(d, i, n, event){
                    // d['color'] = 'black'
                }
            }
        };


    }

    sort_color_nodes(a, b) {
        if (a.color < b.color) { return 1; };
        if (a.color > b.color) { return -1; };
        return 0;
    }

    subtract_nodes(nodes: any, kind: any, origin: any){
        var d1 = nodes.reduce((init, current) => { if (current.data.origin === origin) {init.push(current.data); } return init; }, []).sort(this.sort_color_nodes); // Get ARGs
        var pos = 0
        d1.forEach(e => {
            e.block_id = kind[e.origin]
            e.value = e.id
            e.start = pos  
            e.end = pos + 1
            pos += 1
        });
        return d1
    }

    render(container: string, data: any) {

        this.circos = new Circos({
            container: container,
            width: this.width,
            height: this.height
        });

        const kind = {
            1: 'ARGs',
            2: 'MGEs',
            3: 'UniRef',
            4: 'MRGs',
            9: 'Pathogens',
            10: 'Bacteria'
        }

        // console.log(data)
        const nodes = data.nodes
        const edges = data.edges


        // main layout with the 
        var main_layout = {}
        nodes.forEach(e => { 
            var key = kind[e.data.origin];
            main_layout[key] = {
                len: 0,
                color: e.data.color,
                label: key, 
                id: key
            }
        });
        nodes.forEach(e => { main_layout[kind[e.data.origin]].len += 1 });
        
        var d1 = this.subtract_nodes(nodes, kind, 1); //1-ARGs
        var d2 = this.subtract_nodes(nodes, kind, 2); //2-MGEs
        var d3 = this.subtract_nodes(nodes, kind, 4); //4-MRGs
        var d4 = this.subtract_nodes(nodes, kind, 9); //9-PATH
        var d5 = this.subtract_nodes(nodes, kind, 10); //10-BAC

        var circos_nodes = d1.concat(d2).concat(d3).concat(d4).concat(d5)
        main_layout['MGEs'].color = 'red'
        const layout_data = Object.keys(main_layout).map(e => { return main_layout[e] })
        
        // console.log(circos_nodes);
        // create a dict with the info from the nodes, this is useful when parsing the edges, so I can get right away the data from each node.
        const circos_nodes_dict = {}
        circos_nodes.forEach(e => {
            circos_nodes_dict[e.id] = e;
        });

        // console.log(circos_nodes_dict, edges)
        // traverse the edges
        const _chords = []
        edges.forEach(e => {
            // if(e.data.source !== e.data.target){
                var color = circos_nodes_dict[e.data.source].color
                if(color === 'white') color='red'
                _chords.push({
                    color: color,
                    source: {
                        id: circos_nodes_dict[e.data.source].block_id,
                        start: circos_nodes_dict[e.data.source].start,
                        end: circos_nodes_dict[e.data.source].end, 
                        color: circos_nodes_dict[e.data.source].color 
                    },
                    target: {
                        id: circos_nodes_dict[e.data.target].block_id,
                        start: circos_nodes_dict[e.data.target].start,
                        end: circos_nodes_dict[e.data.target].end,
                        color: circos_nodes_dict[e.data.target].color 
                    }
                });
            // }
        });

        // console.log(_chords);

        

        this.circos.layout(layout_data, this.conf1);
        this.circos.chords('chords', _chords, this.origin_2);
        this.circos.highlight('ARGs', circos_nodes, this.origin_1);
        

        this.circos.render();
    };


    
}


