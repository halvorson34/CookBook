import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("Test Recipe 1", "Description of Recipe 1", "https://th.bing.com/th/id/OIP.41AA68Z2szUwM4fg-IqzTwHaE7?w=268&h=180&c=7&r=0&o=5&pid=1.7"),
    new Recipe("Test Recipe 2", "Description of Recipe 2", "https://th.bing.com/th/id/OIP.41AA68Z2szUwM4fg-IqzTwHaE7?w=268&h=180&c=7&r=0&o=5&pid=1.7")
  ];

  constructor() { }

  ngOnInit() {

  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
