import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';



// var $ = require('jquery/jquery.js');
// var Typed =  require('../../assets/vendor/typedjs/typed.js');

// import { Typed } from '@kuflink/angular-typed';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public message: string;
  public _cont: number;
  public messages: Array<string>;
  // name:string;
  // video: any = {id: 'xZbcwi7SfZE'};
  // baseUrl:string = 'https://www.youtube.com/embed/';
  // url: any;
  // constructor(private sanitizer: DomSanitizer) {
  //   this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);
  // }

  ngOnInit() {
    this._cont = 0;
    this.messages = [
      'AMR is an increasingly serious threat to global public health'
    ];
    this.message = this.messages[this._cont];
  }

  onComplete() {
    // this.message = this.messages[1];
    // this._cont = this._cont === this.messages.length - 1 ? 0 : this._cont += 1;
    // console.log(this._cont, this.message);
  }

}
