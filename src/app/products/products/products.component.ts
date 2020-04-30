import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  products = [
    {
      id: 1,
      name: 'Apple',
      descr: 'This is an apple',
      price: 10
    },
    {
      id: 2,
      name: 'Banana',
      descr: 'This is an banana',
      price: 20
    },
    {
      id: 3,
      name: 'Cherry',
      descr: 'This is an cherry',
      price: 30
    }, {
      id: 4,
      name: 'Pear',
      descr: 'This is an pear',
      price: 30
    },
    {
      id: 5,
      name: 'Strawberry',
      descr: 'This is an strawberry',
      price: 40
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
