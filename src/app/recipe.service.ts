import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RecipeService {

  constructor(private http: Http) { 
  }


  	//API recipe call
  getRecipe(search: string): Observable<any>{
  	return this.http
  				.get(`https://api.edamam.com/search?q=${search}&app_id=8423caad&app_key=469d46fc7957bd00ec6825db72189b21`)
  				.pipe(map((res: Response) =>
  					        res.json()));
  }
}