import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorials-relative-abundance',
  templateUrl: './relative_abundance.component.html',
  styleUrls: ['./relative_abundance.component.css']
})
export class RelativeAbundanceComponent implements OnInit {
  public service: string;

  constructor() {}

  ngOnInit() {
    this.service = 'NanoARG';
  }
}
