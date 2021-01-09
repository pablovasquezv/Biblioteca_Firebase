import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPaises'
})
export class FilterPaisesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const resultadoPaises= [];
    for(const Paises of value){
      if(Paises.Nombre_Pais.toLowerCase().indexOf(args.toLocaleString()) >-1){
        resultadoPaises.push(Paises);
      } 
    }
    return resultadoPaises;
  }

}
