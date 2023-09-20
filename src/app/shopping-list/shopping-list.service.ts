import { EventEmitter } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10),
  ];

  getIngredients() {
    return this.ingredients.slice(); //Used .slice to create a copy of the recipes array so any changes to the array does not effect the recipes property in the RecipeService
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // loop options will work in this scenario but will emit a lot of events
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }

    this.ingredients.push(...ingredients); // use of spread operator ... that will push a list to the array all at once
    this.ingredientsChanged.emit(this.ingredients.slice()); // emit the new copy of the ingredients array
  }
}
