import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedInList = new EventEmitter<Recipe>()
  recipes:Recipe[]= [
    new Recipe('A Test Recipe', 'This is a test recipe description', 'https://www.expatica.com/app/uploads/sites/6/2014/05/bratwurst-sauerkraut.jpg'),
    new Recipe('B Test Recipe', 'This is a test recipe description', 'https://www.expatica.com/app/uploads/sites/6/2014/05/bratwurst-sauerkraut.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeSelectedInList.emit(recipe)
  }

}
