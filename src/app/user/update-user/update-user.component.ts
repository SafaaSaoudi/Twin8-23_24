import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{

  id!:Number;
  fname!:string;
  lname!:string;

constructor(private actR:ActivatedRoute){}

ngOnInit(): void {
  this.getParam();
}

getParam(){
  //this.id= Number(this.actR.snapshot.paramMap.get('param'));
  this.actR.paramMap.subscribe(data => this.id=Number(data.get('param')));
  this.actR.queryParamMap.subscribe(data => this.fname=String(data.get('fname')));
  this.lname= String(this.actR.snapshot.queryParamMap.get('lname'));
  

}
}
