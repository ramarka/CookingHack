# Description


CookingHack is designed to provide a quick and easy way for people to look up recipes on the internet, providing
a user friendly interface to save recipes and get recipes. CookingHack uses routing services to change data 
displayed and utlizes local storage to store recipes that users like. Recipes are displayed as cards using HTML5 and the latest bootstrap version. Each card has a picture of the cooked recipe, serving size, and additional
options depending on the view. For search results, users have the option to get the recipe, which will open
the recipe URL in another page, or they can save the recipe, which will add the recipe object to local storage.
For the saved recipes component, the recipe objects are displayed as cards as well, however instead of the option
to save, users have the option to remove it from local storage. All recipes displayed use the "ngFor" loop to
iterate through either saved recipes, or recipes returned from an API query on the edamam recipe database.  

## Running Cooking Hack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3. You need to have this latest version installed to run the program. The node_modules folder is not in the directory (to save space in upload), so you will need to run `npm install` in terminal prior to running to get all the necessary
modules. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
