const PfamGraphic = require('./domain_graphics.js');
// const GraphicGenerator = require('./graphic_generator.js');

export class Domain {

  public generator: any;
	constructor() {

    var seq = {
      "length": "1700",
      "regions": [{
          "type": "pfama",
          "text": "Peptidase_S8",
          "colour": "#2dcfff",
          "display": "true",
          "startStyle": "curved",
          "endStyle": "curved",
          "start": "159",
          "end": "361",
          "aliEnd": "350",
          "aliStart": "163"
      }, {
          "type": "pfama",
          "text": "PA",
          "colour": "#ff5353",
          "display": true,
          "startStyle": "jagged",
          "endStyle": "curved",
          "start": "330",
          "end": "469",
          "aliEnd": "469",
          "aliStart": "396"
      }]
  }
    console.log(seq)
    this.generator = new PfamGraphic();
    // this.generator.generate(seq, "dg");
	}
}
