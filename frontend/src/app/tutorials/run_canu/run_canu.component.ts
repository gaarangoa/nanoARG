import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorials-run-canu',
  templateUrl: './run_canu.component.html',
  styleUrls: ['./run_canu.component.css']
})
export class RunCanuComponent implements OnInit {
  public service: string;

  constructor() {}

  ngOnInit() {
    this.service = 'NanoARG';
  }
}
