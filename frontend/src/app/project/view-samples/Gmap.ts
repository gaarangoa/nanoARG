declare var Circos: any;
import 'circos/dist/circos.js';

export class Genome {

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

        // console.log(d1)
        d1.forEach(e => {
            e.value = e.metadata[4]
        });

        this.circos.layout(this.read, this.conf1);
        this.circos.highlight('ARGs', d1, this.origin_1);
        this.circos.highlight('MRGs', d4, this.origin_2);
        this.circos.highlight('MGEs', d2, this.origin_3);
        this.circos.highlight('Others', d3, this.origin_4);
        
        this.circos.text('ARGs_text', d1, this.origin_1);

        this.circos.render();
    };


    compare(a, b) {
        if (a.data < b.data) { return 1; };
        if (a.data > b.data) { return -1; };
        return 0;
    }

        /**
    //  * Get histogram data out of xy data
    //  * @param   {Array} data  Array of tuples [x, y]
    //  * @param   {Number} step Resolution for the histogram
    //  * @returns {Array}       Histogram data
    //  */
    histogram(data, step) {
        var histo = {},
            x,
            i,
            arr = [];

        // Group down
        for (i = 0; i < data.length; i++) {
            x = Math.floor(data[i][0] / step) * step;
            if (!histo[x]) {
                histo[x] = 0;
            }
            histo[x]++;
        }

        // Make the histo group into an array
        for (x in histo) {
            if (histo.hasOwnProperty((x))) {
                arr.push([parseFloat(x), histo[x]]);
            }
        }

        // Finally, sort the array
        arr.sort(function (a, b) {
            return a[0] - b[0];
        });
        
        // console.log(arr);
        return arr;
    }

    genes_distribution(data: any, origin: number, section: number, colors: any){
        // option reffers to the type ARGs, MGEs or others, section reffers to the index in the metadata
        // data are the nodes from the network that contains the necesary information
        const dgenes  = [];
        data.nodes.forEach(e => {
            if (e.data.origin === origin){
                dgenes[e.data.metadata[section]] = {data:0, name:e.data.metadata[section], color:e.data.color}
            }
        });

        data.nodes.forEach(e => {
            if (e.data.origin === origin){
                try {
                    dgenes[e.data.metadata[section]].data += e.data.size 
                } catch (error) {
                    dgenes[e.data.metadata[section]].data = e.data.size
                }
            }
        });

        const genes = Object.keys(dgenes).map(e =>{
            return dgenes[e];
        });

        genes.sort(this.compare);
        const labels = genes.map((i, ix) => { return i.name; });
        // const xdata = genes.map((i, ix) => { return i.data; });
        // console.log(xdata.map(e => {
        //     return {y: e.data, color: e.color}
        // }))

        return {
            chart: {
                borderColor: '#000000',
                borderWidith: 1,
                type: 'bar',
                height: genes.length*15+120,
                position: 'absolute'
            },
            
            title: {
                text: null
            },

            series: [{
                data: genes.map(e => {
                    return {y: e.data, color: e.color}
                })
            }],

            legend: {
                enabled: false,
                align: 'right',
                verticalAlign: 'top',
                layout: 'vertical',
            },

            plotOptions: {
                series: {
                    colorByPoint: true,
                    groupPadding: 0,
                    stacking: 'normal',
                    borderColor: '#000',
                    borderWidth: 1
                }
            },

            xAxis: {
                categories: labels,
                labels: {
                    style: {
                        color: '#000'
                    }
                }
            },

            yAxis: {
                title: {
                    text: 'Number of reads'
                },
                min: 0,
                startOnTick: true,
                minorGridLineWidth: 1,
                majorGridLineWidth: 1,
                
                gridLineWidth: 1,
                labels: {
                    enabled: true
                },
                tickWidth: 1
            },

            credits: {
                enabled: false
            },

        }

    }



    length_distribution(data: any){

        return {
            title : { text : null },
            chart: {
              type: 'column',
            },
            xAxis: {
                categories: data[1],
                labels: {
                    format: '{value} k'
                }
            },
            series: [{
                name: 'Read-length',
                type: 'column',
                data: data[0],
                pointPadding: 0,
                groupPadding: 0,
                pointPlacement: 'between'
            }],
            plotOptions: {
              series: {
                  dataLabels: {
                      enabled: false,
                },
                colorByPoint: false,
                groupPadding: 0,
                stacking: 'normal',
                borderColor: '#000',
                borderWidth: 1
              }
          },
            credits: {
                enabled: false
            },
        };
    };


}


