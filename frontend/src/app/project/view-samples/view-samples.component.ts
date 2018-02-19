import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {GrowlModule, Message} from 'primeng/primeng';

import { SampleService } from '../../../services/sample/sample.service';
import { Session } from '../../../services/session/session.service';
import { ConfirmationService } from 'primeng/primeng';

import { ProjectComponent } from '../project.component';

// import { AbsoluteAbundance } from '../../../classes/abundance.class';

import * as FileSaver from 'file-saver';

import { Genome } from './Gmap';
import { Network } from './network';
import { TaxonomyVisualization } from './taxonomy';

import { Observable } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import 'rxjs/add/operator/takeWhile';

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
      this.stacked = {};
      this.alive = true;
      this.read_length = [];
      this.read_chart = new Genome();
      this.network = new Network();
      this.taxonomy_visualization = new TaxonomyVisualization();

      this.network_data = {nodes:[], edges:[]};
      this.all_samples = [];

      this.selected_read = {
        id: 0,
        taxa: 0
      };

      this.sub = this.route.params.subscribe(
        params => {
          // this.dt.reset();
          
          TimerObservable.create(0, 15000)
          .takeWhile(() => this.alive)
          .subscribe(() => {
            this.sampleService.getSamplesByProject(this.projectComponent.projectID)
            .subscribe(response => {
              
              // var samples = this.sampleService.samplesByProject;
              // // traverse the files, check if any of the samples are still running
              // samples.forEach(item => {
              //   if(item['status'] != 'done') {

              //   }
              // });

            });
          });
          
          this.sampleService.getSamplesByProject(this.projectComponent.projectID)
            .subscribe(response => {
              const samples = this.sampleService.samplesByProject;
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

    get_sample_results(sample_id: string, index: number) {
      
      this.sampleService.get_sample_results(sample_id).
        subscribe( res => {

          if (res === false) {
            this.msgs.push({severity:'info', summary:'Info Message', detail:'Processing sample'});
            return false;
          };

          // console.log(res);

          this.raw_reads = res[0];
          this.filter_reads = this.filter_data(res[0]);
          this.network_data = res[1];
          this.network_labels = res[2];
          this.taxonomy_data = res[3];
          this.read_length = res[4]['read_length_distribution'];

          this.selected_read = this.filter_reads[index].read[0];

          const item = document.getElementById('read_circle_map-1');
          item.innerHTML = '';
          this.read_chart.render('#read_circle_map-1', this.filter_reads[index]['read'], this.filter_reads[index]['data']);
          this.line_chart = this.read_chart.length_distribution(this.read_length);

          this.taxonomy_sample_chart_species = this.taxonomy_visualization.render(this.taxonomy_data, 'species');
          // this.taxonomy_sample_chart_genus = this.taxonomy_visualization.render(this.taxonomy_data, 'genus');

          this.antibiotic_distribution_chart = this.read_chart.genes_distribution(this.network_data, 1, 3, this.network_labels);
          this.args_distribution_chart = this.read_chart.genes_distribution(this.network_data, 1, 4, this.network_labels);
          this.mges_distribution_chart = this.read_chart.genes_distribution(this.network_data, 2, 3, this.network_labels);
          this.metal_distribution_chart = this.read_chart.genes_distribution(this.network_data, 4, 3, this.network_labels);


          this.reads_table = this.filter_reads.map((i, ix) => {
            i.read[0]['index'] = ix;
            return i.read[0];
          });
          
          this.network.render('network', this.network_data);
          // this.network.render('network_labels', this.network_data[1], 'grid', false);
          // console.log(this.reads_table)

        });

    }

    render_read_circular_map(data: any){
      const index = data.index;
      this.selected_read = this.filter_reads[index].read[0];
      const item = document.getElementById('read_circle_map-1');
      item.innerHTML = '';
      this.read_chart.render('#read_circle_map-1', this.filter_reads[index]['read'], this.filter_reads[index]['data']);
      
    }

    view(sample: any) {
      this.get_sample_results(sample['_id'], 5);
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
      
      samples.forEach( (sample, index) => {
        // console.log(sample);
        this.sampleService.get_sample_results(sample['_id']).
          subscribe( res => {
            if (res === false) {
              this.msgs.push({severity: 'info', summary: 'Sample: ' + sample['name'], detail: 'Still Running'});
              return false;
            };
              res[1].nodes.forEach(item => {
                item.data['sample'] = sample['name'];
                item.data['rpm'] = (item['data'].size * 1000000 / res[4]['total_reads']).toFixed(1);
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
