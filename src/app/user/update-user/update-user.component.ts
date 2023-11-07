import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Core/Models/user';
import { UserServiceService } from 'src/app/Core/Services/user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
id!:number;
user!:User;
updateForm!:FormGroup;

constructor( private actR: ActivatedRoute, private R:Router, private userS:UserServiceService){}

  ngOnInit(){
    this.id=this.actR.snapshot.params['param'];
    console.log(this.id);
    
    this.userS.getUserById(this.id).subscribe((data) =>{ this.user=data;
      this.updateForm=new FormGroup({
        id:new FormControl(this.user.id),
        fn:new FormControl(this.user.firstName),
        ln:new FormControl(this.user.lastName),
        db:new FormControl(this.user.birthDate),
        email:new FormControl(this.user.email),
        pass:new FormControl(this.user.password),
        proff:new FormControl(this.user.profession),
        accountcatg:new FormControl(this.user.accountCategory),
        pic:new FormControl(this.user.picture)
       });
     
      }

      );
    }   
  
    


  update(){
   
    this.userS.updateUser(this.updateForm.getRawValue()).subscribe(
      ()=>this.R.navigate(['/users'])
    );

  }




}
