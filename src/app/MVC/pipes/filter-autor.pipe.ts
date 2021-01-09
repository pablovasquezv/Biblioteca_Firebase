import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAutor'
})
export class FilterAutorPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const resultadoAutores= [];
    for(const autores of value){
      if(autores.Nombre_Autor.toLowerCase().indexOf(args.toLocaleString()) >-1){
        resultadoAutores.push(autores);
      }
    }
    return resultadoAutores;
  }

}
