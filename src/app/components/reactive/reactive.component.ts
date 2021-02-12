import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'formulario-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
 // name = new FormControl('');
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(2),Validators.required]),
    lastName: new FormControl('',[Validators.minLength(2),Validators.required,
    Validators.maxLength(50)]),
    email:new FormControl('',[Validators.email,Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password:new FormControl('',[Validators.minLength(8),Validators.required])
  });
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.loginForm.valid === true){
      alert('Data Ok');
      console.log(this.loginForm.value, 'Values' );
     
    }else{
      console.log("El formulario no es valido")
    }
    

  }

}
