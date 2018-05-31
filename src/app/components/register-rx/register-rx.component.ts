import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-rx',
  templateUrl: './register-rx.component.html',
  styleUrls: ['./register-rx.component.less']
})
export class RegisterRxComponent implements OnInit {

  constructor() { }

  private userData: FormGroup = new FormGroup({
      username : new FormControl("xiong"),
      password : new FormControl(""),
      base : new FormGroup({
        age : new FormControl(),
        sex : new FormControl(),
        
    }), 
    tel : new FormControl()
      })
     
  onSubmit(){
    console.log(this.userData.value)
  }
  ngOnInit() {
  }

}
