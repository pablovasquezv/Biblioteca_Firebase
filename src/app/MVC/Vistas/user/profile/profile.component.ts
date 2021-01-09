import { Component, OnInit } from '@angular/core';
//importamos servicio
import { ControladorAuthService } from "../../../Controladores/controlador-auth.service";
import { UsersInterface } from "../../../Modelos/users";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private controladorAuthService: ControladorAuthService
  ) { }
   user: UsersInterface; 
   public providerId: string= 'null';
  ngOnInit() {
    this.controladorAuthService.isAuth().subscribe(user=>{
      if(user){
        this.user.name= user.displayName;
        this.user.email= user.email;
        this.user.photoUrl= user.photoURL;
        this.providerId= user.providerData[0].providerId;
        console.log('User',user);
      }
    })
  }

}
