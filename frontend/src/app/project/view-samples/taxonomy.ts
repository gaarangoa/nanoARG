


export class TaxonomyVisualization {

    constructor(){}

    compare(a, b) {
        const field = 'num_reads';
        if (a[field] < b[field]) { return 1; };
        if (a[field] > b[field]) { return -1; };
        return 0;
    }

    render(data: any, tax_rank: string) {
        
        let xdata = [];
        data.sort(this.compare);
        data.forEach( (element, index) => {
            if (element.tax_rank === tax_rank) {
                xdata.push({
                    name: element.name,
                    y: element.num_reads
                });
            }
        });

        xdata = xdata.slice(0, 15);
        // console.log(xdata);

        return {
            chart: {
                borderColor: '#000000',
                borderWidith: 1,
                type: 'bar',
                height: '100%',
            },
            
            title: {
                text: null
            },

            series: [{
                data: xdata
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
                categories: xdata.map(res => {return res.name ;}),
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
    };

};