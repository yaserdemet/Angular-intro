import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "Categories"
  categories : Category [] =  [
    {
      id:1 ,
      name:"Electronic"
    },
    {
      id:2 ,
      name:"Computer"
    },
    {
      id:3,
      name:"Telephone"
    },
    {
      id:4 ,
      name:"Fun Stuff"
    }
  ]

}
