import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorials-process-output',
  templateUrl: './process_output.component.html',
  styleUrls: ['./process_output.component.css']
})
export class ProcessOutputComponent implements OnInit {
  public service: string;

  constructor() {}

  ngOnInit() {
    this.service = 'NanoARG';
  }
}
