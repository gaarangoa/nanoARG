
var d3 = require('d3/build/d3.node.js');
var eventDrops = require('event-drops/dist/index.js');

const chart = eventDrops({ d3 });
const numberCommitsContainer = document.getElementById('numberCommits');
const zoomStart = document.getElementById('zoomStart');
const zoomEnd = document.getElementById('zoomEnd');


export class EventDrops {

    constructor(){

    }

    parse_data(data: any, origin: number){
        console.log(data);
        
        var mydata = []
        data.data.forEach(e => {
            
            for(let i=e.start; i<=e.end; i+=10){
                if (e.origin === origin){
                    mydata.push( {date: i, message:e.metadata[4], coverage:e.coverage, start: e.start, end: e.end, iden:e.identity, evalue:e.evalue, metadata:e.metadata, strand:e.strand, index: i, author:{name: 'ARGs', email: 'some'}} );
                }
            }
        });

        return mydata
    }

    render(data: any) {
        let arg_reads = this.parse_data(data, 1)
        const arg_data = {name: "ARGs", data: arg_reads} // ARGs

        let mges_reads = this.parse_data(data, 2)
        const mges_data = {name: "MGEs", data: mges_reads} // ARGs

        let mrgs_reads = this.parse_data(data, 4)
        const mrgs_data = {name: "MRGs", data: mrgs_reads} // ARGs

        let other_reads = this.parse_data(data, 3)
        const other_data = {name: "Other genes", data: other_reads} // ARGs

        const c_data = [arg_data, mges_data, mrgs_data, other_data]

        const updateCommitsInformation = chart => {
            
        };

        const tooltip = d3
            .select('body')
            .append('div')
            .classed('tooltip', true)
            .style('opacity', 0);

        const chart = eventDrops({
            d3,
            bound: {
                format: d3.timeFormat('%s'),
            },
            metaballs: {
                blurDeviation: 2,
                colorMatrix: '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -10',
            },
            axis: {
                formats: {
                    milliseconds: '',
                    seconds: '',
                    minutes: '',
                    hours: '',
                    days: '',
                    weeks: '',
                    months: '',
                    year: '',
                },
            },
            
            zoom: {
                onZoomEnd: () => updateCommitsInformation(chart),
            },
            drop: {
                radius: 4,
                date: d => new Date(d.date),
                onMouseOver: commit => {
                    tooltip
                        .transition()
                        .duration(200)
                        .style('opacity', 1);
        
                    tooltip
                        .html(
                            `
                            <div class="box box-solid">
                            <div class="box-body">
                            <hp><strong>Gene: </strong>${commit.metadata[4]}</hp>
                            <p>${commit.metadata[3]}</p>                            
                            <p><strong>Position</strong>: ${commit.start} - ${commit.end}</p>
                            <p><strong>Identity</strong>: ${commit.iden}</p>
                            <p><strong>Coverage</strong>: ${commit.coverage}</p>
                            <p><strong>e-value</strong>: ${commit.evalue}</p>
                            <p><strong>Strand</strong>: ${commit.strand} </p>
                            </div>
                            </div>
                        `
                        )
                        .style('left', `${d3.event.pageX - 30}px`)
                        .style('top', `${d3.event.pageY + 20}px`);
                },
                onMouseOut: () => {
                    tooltip
                        .transition()
                        .duration(500)
                        .style('opacity', 0);
                },
            },
            range: {
                start: 0,
                end: data.read[0].len
            },
            label: {
                padding: 20,
                text: d => `${d.name}`,
                width: 150,
            },
            line: {
                color: (_, index) => d3.schemeCategory10[index],
                height: 40,
            },


        });

        d3.select('#eventdrops-demo')
            .data([c_data])
            .call(chart);
        
        updateCommitsInformation(chart);
    }

}

