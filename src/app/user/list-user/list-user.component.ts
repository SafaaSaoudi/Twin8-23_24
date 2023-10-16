import { Component } from '@angular/core';
import { User } from '../../Models/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Core/Services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {

List:User[]=[];

constructor(private Router:Router, private userS:UserService){}

ngOnInit(){
  this.List=this.userS.getAllusers();
}


add(){
this.Router.navigate(["users/addUser"]);
}

}
