var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
var SearchComponent = /** @class */ (function () {
    function SearchComponent(recipeService) {
        this.recipeService = recipeService;
        this.searchUrl = "https://api.edamam.com/search?q=chicken&app_id=$8423caad&app_key=$469d46fc7957bd00ec6825db72189b21";
    }
    SearchComponent.prototype.term = function () {
        var app_id = "8423caad";
        var app_key = "469d46fc7957bd00ec6825db72189b21";
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recipeService
            .getRecipe()
            .subscribe(function (result) {
            //console.log(result)
            _this.recipeList = result.hits;
            console.log(_this.recipeList[1].recipe.label);
        });
    };
    SearchComponent = __decorate([
        Component({
            selector: 'app-search',
            templateUrl: './search.component.html',
            styleUrls: ['./search.component.css']
        }),
        __metadata("design:paramtypes", [RecipeService])
    ], SearchComponent);
    return SearchComponent;
}());
export { SearchComponent };
//# sourceMappingURL=search.component.js.map