import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEditoriales'
})
export class FilterEditorialesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const resultadoEditoriales= [];
    for(const editoriales of value){
      if(editoriales.Nombre_Editorial.toLowerCase().indexOf(args.toLocaleString()) >-1){
        resultadoEditoriales.push(editoriales);
      } 
    }
    return resultadoEditoriales;
  }

}
