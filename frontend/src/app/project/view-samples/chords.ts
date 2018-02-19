declare var Circos: any;
import 'circos/dist/circos.js';

export class chords {

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
        this.height = 400;

        this.conf1 = {
            innerRadius: (this.height / 2.8) - 1,
            outerRadius: this.height / 2.8,
            cornerRadius: 5,
            color: 'rgba(200,0,0,0.5)',
            gap: 0.0, // in radian
            labels: {
              display: false,
              position: 'center',
              size: '1px',
              color: 'rgba(200,0,0,0.5)',
              radialOffset: 0,
            },
            ticks: {
              display: true,
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
            opacity: 0.7,
            // opacity: function(d) { if (d.origin === 1) { return d.opacity; }else { return 0; }},
            logScale: false,
            tooltipContent: function(d){ return d.value; },
            events: {}
        };

        this.origin_2 = {
            innerRadius: (this.height / 3.7) - 15,
            outerRadius: this.height / 3.7,
            min: null,
            max: null,
            color: function(d) { return d.color; },
            strokeColor: function(d) { return 'black'; },
            strokeWidth: function(d){return d.stroke_width;},
            opacity: 0.7,
            // opacity: function(d) { if (d.origin === 4) { return d.opacity; }else { return 0; }},
            logScale: false,
            tooltipContent: function(d){ return d.value; },
            events: {}
        };

        this.origin_3 = {
            innerRadius: (this.height / 5) - 15,
            outerRadius: this.height / 5,
            min: null,
            max: null,
            color: function(d) { return d.color; },
            strokeColor: function(d) { return 'black'; },
            strokeWidth: function(d){return d.stroke_width;},
            opacity: 0.7,
            // opacity: function(d) { if (d.origin === 3) { return d.opacity; }else { return 0; }},
            logScale: false,
            tooltipContent: function(d){ return d.value; },
            events: {}
        };

        this.origin_4 = {
            innerRadius: (this.height / 6.7) - 15,
            outerRadius: this.height / 6.7,
            min: null,
            max: null,
            color: function(d) { return d.color; },
            strokeColor: function(d) { return 'black'; },
            strokeWidth: function(d){return d.stroke_width;},
            opacity: 0.7,
            // opacity: function(d) { if (d.origin === 4) { return d.opacity; }else { return 0; }},
            logScale: false,
            tooltipContent: function(d){ return d.value; },
            events: {}
        };

    }

    render(container: string, read: any, data: any) {
        this.read = read;
        this.data = data;

        this.circos = new Circos({
            container: container,
            width: this.width,
            height: this.height
        });

        var d1 = this.data.reduce((init, current) => { if (current.origin === 1) {init.push(current); } return init; }, []);
        var d2 = this.data.reduce((init, current) => { if (current.origin === 2) {init.push(current); } return init; }, []);
        var d3 = this.data.reduce((init, current) => { if (current.origin === 3) {init.push(current); } return init; }, []);
        var d4 = this.data.reduce((init, current) => { if (current.origin === 4) {init.push(current); } return init; }, []);

        this.circos.layout(this.read, this.conf1);
        this.circos.highlight('ARGs', d1, this.origin_1);
        this.circos.highlight('MRGs', d4, this.origin_2);
        this.circos.highlight('MGEs', d2, this.origin_3);
        this.circos.highlight('Others', d3, this.origin_4);
        
        // this.circos.text('MGEs', this.data, this.origin_2);

        this.circos.render();
    };


    
}


