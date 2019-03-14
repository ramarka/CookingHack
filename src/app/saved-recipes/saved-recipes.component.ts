import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {
	recipes: Array<any>;

  constructor() { 
    //if local storage already exists then it is stored in recipes array
  	if(localStorage.getItem("saved-recipes")){
  		this.recipes = JSON.parse(localStorage.getItem("saved-recipes"));
  	}

  }

//alerts user to confirm recipe remove and removes from local storage if true. essentially
//ovewrites existing storage with recipes array
remove(index){
  	let resp = confirm("Are you sure you want to remove recipe?");
  	if (resp == true){
  		this.recipes.splice(index, 1)
  		localStorage.setItem("saved-recipes", JSON.stringify(this.recipes));
  	}
  }
  ngOnInit() {
  }

}
