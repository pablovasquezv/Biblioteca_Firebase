import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLibros'
})
export class FilterLibrosPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const resultadoLibros= [];
    for(const Libros of value){
      if(Libros.Titulo_Libro.toLowerCase().indexOf(args.toLocaleString()) >-1){
        resultadoLibros.push(Libros);
      } 
    }
    return resultadoLibros;
  }

}
