import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {
  public service: string;

  constructor() {}

  ngOnInit() {
    this.service = 'NanoARG';
  }
}
