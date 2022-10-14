import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title:string = "Products";
  products: any[] = [
    {
      id: 1,
      name : "Laptop",
      price : 3500,
      categoryId : 10,
      description : "MacBook Pro"
    },
    {
      id: 2,
      name : "Laptop",
      price : 2500,
      categoryId : 11,
      description : "Asus ZenBook"
    },
    {
      id: 3,
      name : "Laptop",
      price : 5500,
      categoryId : 13,
      description : "Monster Pro"
    },
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
