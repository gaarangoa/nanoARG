import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  public service: string;

  constructor() {}

  ngOnInit() {
    this.service = 'NanoARG';
  }
}
