import { Chords } from './chords';

export class Stats{
    public chords: any;
    constructor(){
        this.chords = new Chords();
    }



    overall_abundances(data: any){
        const kind = this.chords.kind;
        var main_layout = {
            ARGs: {
                counts: 0,
            },
            MGEs: {
                counts: 0,
            },
            MRGs: {
                counts: 0,
            },
            Bacteria: {
                counts: 0
            }
        }
        // console.log(data)

        data.nodes.forEach(e => {
            // if(e.data.origin < 9) {
                var key = kind[e.data.origin];
                main_layout[key] = {
                    counts: 0,
                    color: e.data.color,
                    label: key,
                    id: key
                }
            // }
        });
        data.nodes.forEach(e => { main_layout[kind[e.data.origin]].counts += e.data.size });

        console.log(main_layout)
        return main_layout
    }

}