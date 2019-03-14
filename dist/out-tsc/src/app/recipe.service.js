var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
var RecipeService = /** @class */ (function () {
    function RecipeService(http) {
        this.http = http;
    }
    RecipeService.prototype.getRecipe = function () {
        return this.http
            .get('https://api.edamam.com/search?q=chicken&app_id=8423caad&app_key=469d46fc7957bd00ec6825db72189b21')
            .pipe(map(function (res) {
            return res.json();
        }));
    };
    RecipeService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], RecipeService);
    return RecipeService;
}());
export { RecipeService };
//# sourceMappingURL=recipe.service.js.map