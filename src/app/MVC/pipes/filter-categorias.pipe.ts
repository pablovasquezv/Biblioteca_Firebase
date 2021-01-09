import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategorias'
})
export class FilterCategoriasPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const resultadoCategorias= [];
    for(const categorias of value){
      if(categorias.Nombre_Categoria.toLowerCase().indexOf(args.toLocaleString()) >-1){
        resultadoCategorias.push(categorias);
      }
    }
    return resultadoCategorias;
  }

}
