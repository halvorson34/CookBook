import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Test Recipe 1",
      "Description of Recipe 1",
      "https://th.bing.com/th/id/OIP.41AA68Z2szUwM4fg-IqzTwHaE7?w=268&h=180&c=7&r=0&o=5&pid=1.7",
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      "Test Recipe 2",
      "Description of Recipe 2",
      "https://th.bing.com/th/id/OIP.41AA68Z2szUwM4fg-IqzTwHaE7?w=268&h=180&c=7&r=0&o=5&pid=1.7",
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); //Used .slice to create a copy of the recipes array so any changes to the array does not effect the recipes property in the RecipeService
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
