import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {GrowlModule, Message} from 'primeng/primeng';

import { SampleService } from '../../../services/sample/sample.service';
import { Session } from '../../../services/session/session.service';
import { ConfirmationService } from 'primeng/primeng';

import { ProjectComponent } from '../project.component';

// import { AbsoluteAbundance } from '../../../classes/abundance.class';

// import * as FileSaver from 'file-saver';

import { Genome } from './Gmap';
import { Chords } from './chords';
import { Network } from './network';
import { TaxonomyVisualization } from './taxonomy';

import { Observable } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import 'rxjs/add/operator/takeWhile';

import { EventDrops } from './EventDrops';
import { Stats } from './OverallStats'

@Component({
  // selector: 'app-view-samples',
  templateUrl: './view-samples.component.html',
  styleUrls: ['./view-samples.component.css']
})


export class ViewSamplesComponent implements OnInit {

  private sub: any;
  msgs: Message[] = [];
  public rel_abn_type = [];
  public rel_abn_subtype = [];
  public compare_samles_stacked_bar: Object;
  public line_chart: Object;
  public type_csv: string;
  public subtype_csv: string;
  // public absoluteAbundance: any;
  public read_chart: any;
  public filter_reads: any;
  public reads_table: any;
  public mges_distribution_chart: any;
  public args_distribution_chart: any;
  public antibiotic_distribution_chart: any;
  public metal_distribution_chart: any;
  public network: any;
  public network_data: any;
  public network_labels: any;
  public selected_read: any;
  public raw_reads: any;
  public taxonomy_visualization: any;
  public taxonomy_sample_chart_species: any;
  public taxonomy_sample_chart_genus: any;
  public taxonomy_data: any;
  public all_samples: Array<{}>;
  public stacked: any;
  public alive: boolean;
  public read_length: any;
  public event_drops: any;
  public selected_sample: any;
  public co_occurrence_chords: any;
  public stats: any;
  public general_info: any;
  public args_on_reads: any;
  public parameters: any;
  // public sample_list: any;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public sampleService: SampleService,
    private confirmationService: ConfirmationService,
    private session: Session,
    private projectComponent: ProjectComponent
  ){

   }

    ngOnInit() {
      this.parameters = {
        identity: 25,
        coverage: 40,
        evalue: (1e-5).toExponential(),
        prob: 0.5
      };

      this.stacked = {};
      this.args_on_reads = [];
      this.general_info = {
        ARGs:{counts: 0},
        MGEs:{counts: 0},
        MRGs:{counts: 0},
      };
      this.alive = true;
      this.read_length = [];
      this.read_chart = new Genome();
      this.network = new Network();
      this.event_drops = new EventDrops()
      this.stats = new Stats();

      this.taxonomy_visualization = new TaxonomyVisualization();
      this.selected_sample = {name:''}
      this.network_data = {nodes:[], edges:[]};
      this.all_samples = [];


      this.co_occurrence_chords = new Chords()

      this.selected_read = {
        id: 0,
        taxa: 0,
        link: ['50,150,2_1,MY+300,400,3_3,DOMAIN+50,150,2_2,MY2+300,400,4_4,DOMAIN2&len=700']
      };

      this.sub = this.route.params.subscribe(
        params => {
          // this.dt.reset();

          TimerObservable.create(0, 2000)
          .takeWhile(() => this.alive)
          .subscribe(() => {
            this.sampleService.getSamplesByProject(this.projectComponent.projectID)
            .subscribe(response => {});
          });

          this.sampleService.getSamplesByProject(this.projectComponent.projectID)
            .subscribe(response => {
              const samples = this.sampleService.samplesByProject;
              this.selected_sample = samples[0]
              this.get_sample_results(samples[0]['_id'], 5);
              this.sample_comparison();
            });



        }
      );
    }

    filter_data(data: any){
      const filtered_data = [];
      data.forEach(element => {
        if (element.read[0].args >= 0){
          filtered_data.push(element);
        };
      });
      return filtered_data;
    }

    origin2category(index){
      if ( index === 1 ) { return 'ARGs'; }
      if ( index === 2 ) { return 'MGEs'; }
      if ( index === 3 ) { return 'Other'; }
      if ( index === 4 ) { return 'MRGs'; }
      if ( index === 9 ) { return 'Taxa'; }
      if ( index === 10 ) { return 'Taxa'; }
    }

    condense_genes_reads(data: any){
      const mydata = [];

      data.forEach(element => {
        element.data.forEach(entry => {
            entry['_gene_id'] = entry.metadata[0];
            entry['_class_name'] = entry.metadata[3];
            entry['_gene_name'] = entry.metadata[4];
            entry['_category'] = this.origin2category(entry.origin);
            entry['_taxa'] = element.read[0].taxa;
            entry['_taxa_id'] = element.read[0].taxa_id;
            entry.coverage = 100 * entry.coverage.toFixed(2);
            entry.evalue = entry.evalue.toExponential();
            mydata.push(entry);
        });
      });

      return mydata;
    }

    pass_filter(data, p) {
      // console.log(data, p);
      if (
          data.coverage < p.coverage / 100
          || data.identity < p.identity
          || data.evalue >  p.evalue
      ) {
          return false;
      } else {
          return true;
      }
  }

    on_update_parameters(_identity_input, _coverage_input, _evalue_input) {

      this.parameters.identity = Number(_identity_input.value);
      this.parameters.coverage = Number(_coverage_input.value);
      this.parameters.evalue = Number(_evalue_input.value);

      // console.log(this.parameters);

      this.antibiotic_distribution_chart = this.read_chart.genes_distribution(this.network_data, 1, 3, this.network_labels,
        this.parameters);
      this.args_distribution_chart = this.read_chart.genes_distribution(this.network_data, 1, 4, this.network_labels, this.parameters);
      this.mges_distribution_chart = this.read_chart.genes_distribution(this.network_data, 2, 3, this.network_labels, this.parameters);
      this.metal_distribution_chart = this.read_chart.genes_distribution(this.network_data, 4, 3, this.network_labels, this.parameters);

      //
      // this.args_on_reads = this.condense_genes_reads(this.filter_reads);

      // this.read_chart.render('#read_circle_map-1', this.filter_reads[index]['read'], this.filter_reads[index]['data']);

      // co-occurrence network
      // this.network.render('network', this.network_data);

      //

    }

    generate_gene_arrangement_image(data: any) {
      console.log(data);
      const _text = {};

      data.data.forEach(element => {
        const shape = element.strand === '+' ? '3' : '4';
        const _start = Math.floor( (element.start ) / 10);
        const _end = Math.floor( (element.end) / 10);
        const _category = element._category === 'ARGs' ?  element._gene_name : element._class_name;



        if (_text[element._category]) {
          _text[element._category] += _start.toString() + ',' + _end.toString() + ',' + shape + '_' + element.origin + ',' + _category + '+';
        } else {
          _text[element._category] = _start.toString() + ',' + _end.toString() + ',' + shape + '_' + element.origin + ',' + _category + '+';
        }

      });

      const _my_text = [];
      Object.keys(_text).forEach(e => {
        // console.log(e)
        _my_text.push( _text[e].slice(0, -1) + '&hscale=1&len=' + Math.floor( (data.read[0].len) / 10) );
      });

      // console.log(_my_text);
      return _my_text;
    }

    get_sample_results(sample_id: string, index: number) {

      console.log(this.parameters);

      this.sampleService.get_sample_results(sample_id).
        subscribe( res => {

          if (res === false) {
            this.msgs.push({severity: 'info', summary: 'Info Message', detail: 'Processing sample'});
            return false;
          };

          // console.log(res);

          // this.raw_reads = res[0];
          this.filter_reads = res[0];
          this.network_data = res[1];

          // console.log(res);

          this.network_labels = res[2];
          this.taxonomy_data = res[3];
          this.read_length = res[4]['read_length_distribution'];

          this.selected_read = this.filter_reads[index].read[0];

          // variable with general statistics
          this.general_info = this.stats.overall_abundances(this.network_data);
          // console.log(this.general_info);

          // length distribution
          this.line_chart = this.read_chart.length_distribution(this.read_length);

          // Genes distribution
          this.antibiotic_distribution_chart = this.read_chart.genes_distribution(this.network_data, 1, 3, this.network_labels, this.parameters);
          this.args_distribution_chart = this.read_chart.genes_distribution(this.network_data, 1, 4, this.network_labels, this.parameters);
          this.mges_distribution_chart = this.read_chart.genes_distribution(this.network_data, 2, 3, this.network_labels, this.parameters);
          this.metal_distribution_chart = this.read_chart.genes_distribution(this.network_data, 4, 3, this.network_labels, this.parameters);

          // reads with ARGs //
          this.args_on_reads = this.condense_genes_reads(this.filter_reads);

          // this.read_chart.render('#read_circle_map-1', this.filter_reads[index]['read'], this.filter_reads[index]['data']);
          // const gene_organization_div = document.getElementById('gene_organization');
          // gene_organization_div.innerHTML = '';
          // this.event_drops.render( this.filter_reads[index]);
          this.selected_read.link = this.generate_gene_arrangement_image(this.filter_reads[index]);
          // console.log(this.selected_read);


          // co-occurrence network
          this.network.render('network', this.network_data);

          // co-occurrence chords
          // const item = document.getElementById('co_occurrence_chords');
          // item.innerHTML = '';
          // this.co_occurrence_chords.render('#co_occurrence_chords', this.network_data);

          // barchart witht he species abundances //
          this.taxonomy_sample_chart_species = this.taxonomy_visualization.render(this.taxonomy_data, 'species');
          // this.taxonomy_sample_chart_genus = this.taxonomy_visualization.render(this.taxonomy_data, 'genus');

          // table for the species abundances //
          this.reads_table = this.filter_reads.map((i, ix) => {
            i.read[0]['index'] = ix;
            return i.read[0];
          });

          // this.network.render('network_labels', this.network_data[1], 'grid', false);
          // console.log(this.reads_table)

        });

    }

    render_read_circular_map(data: any){
      const index = data.index;
      this.selected_read = this.filter_reads[index].read[0];
      this.selected_read.link = this.generate_gene_arrangement_image(this.filter_reads[index]);
      // const item = document.getElementById('gene_organization');
      // item.innerHTML = '';
      // this.event_drops.render(this.filter_reads[index]);

      // this.read_chart.render('#read_circle_map-1', this.filter_reads[index]['read'], this.filter_reads[index]['data']);

    }

    view(sample: any) {
      this.selected_sample = sample;
      this.get_sample_results(sample['_id'], 0);

    }

    rerun(sample: any){
      // console.log(sample)
      this.confirmationService.confirm({
            message: 'ARGpore will execute only if only there were any errors during the execution.',
            header: 'Re-run sample',
            icon: 'fa fa-play',
            accept: () => {
                // console.log(sample)
                // sample.status = 're-running';
                // *************************************
                // TODO: create a service that updates the status of a sample given its ID !IMPORTANT
                // *************************************
                this.sampleService.run(sample)
                  .subscribe(project => {

                  });
            }
        });

    }

    removeSample(sample: any) {
        this.confirmationService.confirm({
            message: 'Do you want to delete this sample?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.sampleService.deleteSample(sample)
                  .subscribe(() => {

                  });

            }
        });
    }

    sample_comparison() {
      // load the first sample
      const samples = this.sampleService.samplesByProject;
      // console.log(samples);
      this.all_samples = [];
      samples.forEach( (sample, index) => {
        // console.log(sample);
        this.sampleService.get_sample_results(sample['_id']).
          subscribe( res => {
            // console.log(res);
            // console.log(sample['_id']);
            if (res === false) {
              this.msgs.push({severity: 'info', summary: 'Sample: ' + sample['name'], detail: 'Still Running'});
              return false;
            };
            // console.log(this.all_samples.length)
              res[1].nodes.forEach(item => {
                item.data['sample'] = sample['name'];
                item.data['rel_abn_args'] = (item['data'].size * 1 / res[4]['total_mapped_ARG_reads']).toFixed(5);
                item.data['rel_abn_total_genes'] = (item['data'].size * 10000 / res[4]['total_functional_reads']).toFixed(5);
                item.data['rel_abn_total_reads'] = (item['data'].size * 14000000 / res[4]['total_bp_counts']).toFixed(5);
                item.data['rel_abn_unique_strains'] = (item['data'].size * 1 / res[4]['total_unique_genomes']).toFixed(5);
                item.data['category'] = item['data']['metadata'][3];
                this.all_samples.push(item.data);
              });
          });
        });
        // console.log(this.all_samples);
    }



    ngOnDestroy() {
      this.sub.unsubscribe();
      this.alive = false;
    }

}
