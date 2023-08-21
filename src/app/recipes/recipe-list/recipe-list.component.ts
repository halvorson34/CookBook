import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Title of Recipe", "Description of Recipe", "https://th.bing.com/th/id/OIP.41AA68Z2szUwM4fg-IqzTwHaE7?w=268&h=180&c=7&r=0&o=5&pid=1.7")
  ];

  constructor() { }

  ngOnInit() {

  }

}
