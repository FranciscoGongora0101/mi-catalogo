import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[appRangoModelos]',
  providers: [{provide: NG_VALIDATORS, useExisting: RangoModelosDirective ,multi:true}]
})
export class RangoModelosDirective implements Validator{

  @Input('appRangoModelos') rangoModelos: number[];
  constructor() { }

  validate(control: AbstractControl): {[key: string]: any}{
    return this.rangoModelos ? this.rangoModelosValidator(this.rangoModelos)(control):null;
  }

  rangoModelosValidator(modelos: number[]): ValidatorFn{
    return(control:AbstractControl): {[key: string]: any} | null =>{
      let minimo = modelos[0];
      let maximo = modelos[1];
      const forbidden = minimo > maximo
      return forbidden ? {'forbiddenModels': {value: modelos}}:null
    }
  }
}

