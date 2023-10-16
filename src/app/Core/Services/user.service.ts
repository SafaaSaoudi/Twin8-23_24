import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  List_users:User[]=[
    {
      "idCustomer": 1,
      "firstName": "Nour",
      "lastName": " Kunis",
      "birthDate": "1999-06-30",
      "accountCategory": "Admin",
      "email": "mila@kunis.com",
      "password": "test",
      "picture": "https://bootdey.com/img/Content/avatar/avatar3.png",
      "profession": "Software Engineer"
    },
    {
      "idCustomer": 2,
      "firstName": "test",
      "lastName": " Kunis",
      "birthDate": "1999-06-30",
      "email": "mila@kunis.com",
      "password": "test",
      "profession": "Software Engineer",
      "accountCategory": "Admin",
      "picture": "https://bootdey.com/img/Content/avatar/avatar3.png"
    },
    {
      "idCustomer": 3,
      "firstName": "George",
      "lastName": "Cloney",
      "birthDate": "1999-06-30",
      "email": "marlon@brando.com",
      "password": "test",
      "profession": "Software Engineer",
      "accountCategory": "Customer",
      "picture": "https://bootdey.com/img/Content/avatar/avatar1.png"
    },
    {
      "idCustomer": 4,
      "firstName": "Ryan",
      "lastName": "Gossling",
      "birthDate": "1999-06-30",
      "accountCategory": "Golden",
      "email": "Ryan@nicholson.com",
      "password": "test",
      "picture": "https://bootdey.com/img/Content/avatar/avatar4.png",
      "profession": "Software Engineer"
    },
    {
      "idCustomer": 5,
      "firstName": "Robert",
      "lastName": "Downey",
      "birthDate": "1999-06-30",
      "accountCategory": "Blocked Account",
      "email": "robert@nicholson.com",
      "password": "test",
      "picture": "https://bootdey.com/img/Content/avatar/avatar5.png",
      "profession": "Software Engineer"
    }
  ];

  constructor(){ }

  getAllusers(){
    return this.List_users;
  }

  getUserById(id:number){

  }
  addUser(u:User){}

  updateUser(id:number, u:User){}

  deleteUser(id:number){}


}
