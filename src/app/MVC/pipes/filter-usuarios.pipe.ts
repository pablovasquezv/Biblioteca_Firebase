import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsuarios'
})
export class FilterUsuariosPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const resultadoUsuarios= [];
    for(const Usuarios of value){
      if(Usuarios.Rut_Usuario.toLowerCase().indexOf(args.toLocaleString()) >-1){
        resultadoUsuarios.push(Usuarios);
      } 
    }
    return resultadoUsuarios;
  }

}
