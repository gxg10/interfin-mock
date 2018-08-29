import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: [
    './assets/images/img1.png',
    './assets/images/img2.png',
    './assets/images/img3.png',
    './assets/images/img4.png',
    './assets/images/img5.png',
    './assets/images/img6.png',
    './assets/images/img7.png',
    './assets/images/img8.png',
    './assets/images/img9.png',
    './assets/images/img10.png',
    './assets/images/img11.png'

  ];
  constructor() { }


  ngOnInit() {

  }
}
