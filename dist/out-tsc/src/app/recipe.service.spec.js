import { TestBed } from '@angular/core/testing';
import { RecipeService } from './recipe.service';
describe('RecipeService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(RecipeService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=recipe.service.spec.js.map