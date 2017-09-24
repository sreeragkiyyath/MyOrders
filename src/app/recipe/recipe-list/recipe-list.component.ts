import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeData: RecipeModel[]= [
    new RecipeModel('burger',
              'burger is the american foof filled awith all sorts of vegetables it seems to berich in proteins',
               'https://www.franchiseindia.com/uploads/content/ri/art/fast-food-586d2c1ff8.jpg?d=2'),
               new RecipeModel('PIZZA',
               'PIZZA is the american foof filled awith all sorts of vegetables it seems to berich in proteins',
                'https://cdn.modpizza.com/wp-content/uploads/2016/11/mod-pizza-calexico-default-e1479167492741.png') 
               ];
  constructor() { }

  ngOnInit() {
  }

}
