import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPrestamos'
})
export class FilterPrestamosPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const resultadoPrestamos= [];
    for(const Prestamos of value){
      if(Prestamos.ID_Usuario_Prestamo.toLowerCase().indexOf(args.toLocaleString()) >-1){
        resultadoPrestamos.push(Prestamos);
      } 
    }
    return resultadoPrestamos;
  }

}
