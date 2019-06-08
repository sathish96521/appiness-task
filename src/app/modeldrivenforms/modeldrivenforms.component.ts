import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-modeldrivenforms',
  templateUrl: './modeldrivenforms.component.html',
  styleUrls: ['./modeldrivenforms.component.css']
})
export class ModeldrivenformsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder){

  }
countries = [
  {
    "countryId" : 1,
    "countryName" : "India"
  },
  {
    "countryId" : 2,
    "countryName" : "Canada"
  },
  {
    "countryId" : 3,
    "countryName" : "Japan"
  },
  {
    "countryId" : 4,
    "countryName" : "Singapoor"
  }
]
// phonePattern = '^((\\+91-?)|0)?[0-9]{10}$';
//   passwordRegexp = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
//   usernameRegexp = new RegExp('/\s/');
   userForm: any;

  ngOnInit() {
      this.userForm=this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.pattern('^[a-zA-Z\s]{5,15}$')]],
      userEmail: ['', Validators.required,Validators.email],
      website:['', Validators.required],
      phonenumber: ['', Validators.required,Validators.pattern('^[0-9]{10}$')],
      countries:['', Validators.required],
      description:['',[Validators.required, Validators.minLength(4)]],
      date:['', Validators.required],
  })
  }
  public myData =""
  public myKeys:any=[];
  onSubmit(value:any){
    this.myData = JSON.stringify(value)
    localStorage.setItem('key',this.myData)
    this.myKeys.push(JSON.parse(localStorage.getItem('key')));
    console.log(this.myKeys);
  }
  editUser(){
    alert('edit user is working...')
  }
}