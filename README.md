# NgxSmile

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

# Usage

## How to


### Basic
Import NgxSmileModule into your app :
``` 
import { NgxSmileModule } from 'ngx-smile';
 ```

Then just, as in the examples, use it :
```
<ngx-smile threshold="1"></ngx-smile>
```

The only required parameter is "threshold". It can be any number, but it has to be a number. So for example `1`, or `0`, or `-42`, or `666`.

The smile will depend on it.

### More

There is a debug mode that allows you to play with the parameters :
```<ngx-smile threshold="1" showDebug="true"></ngx-smile>```


## Examples
![](https://github.com/RomainFleury/ngx-smile/blob/master/example.png)


# Development

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build the module :
```ng build NgxSmile && git commit -am'update package' && git push```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
