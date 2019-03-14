import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RecipeService} from '../recipe.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
	recipeList: Array<any>;
  savedRecipes: Array<any>;

  		

constructor(private recipeService: RecipeService){
}



   //API call to get array of Recipe Objects and adds to recipeList Array
   search(search: string){
      this.recipeService
      .getRecipe(search)
      .subscribe(result =>{
        //console.log(result)
        this.recipeList = result.hits;
      
      });


  	
  }

    //checks to see if local storage exists and if true, stores in savedRecipes array. Then
    //adds the recipe clicked by user
    save(index: any): void{
      if(localStorage.getItem("saved-recipes")){
      this.savedRecipes = JSON.parse(localStorage.getItem("saved-recipes"));
      this.savedRecipes.push(this.recipeList[index]);
    }else{
      this.savedRecipes.push(this.recipeList[index]);
    }
    localStorage.setItem("saved-recipes", JSON.stringify(this.savedRecipes));
    alert("Recipe added to local storage");
  }  


    ngOnInit(){
      this.savedRecipes = [];
    
}

}
