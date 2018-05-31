import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-formarray',
  templateUrl: './register-formarray.component.html',
  styleUrls: ['./register-formarray.component.less']
})
export class RegisterFormarrayComponent implements OnInit {
  constructor(private fb:FormBuilder) { }
  
  addEmail(){
    let emailList = this.userInfo.get("emails") as FormArray;
    emailList.push(new FormControl())
  }

  private userData: FormGroup = new FormGroup({
      username : new FormControl("xiong"),
      password : new FormControl(""),
      base : new FormGroup({
        age : new FormControl(),
        sex : new FormControl(),    
    }), 
    tel : new FormControl(),
    emails : new FormArray([
      new FormControl()
    ])
  })
     

  onSubmit(){
    console.log(this.userInfo.value)
  }

  // 第二种方法，优化代码
  private userInfo: FormGroup;
  ngOnInit() {
    this.userInfo = this.fb.group({
      username:"",
      password: "",
      base: this.fb.group({
        age: "",
        sex: ""
      }),
      tel : "",
      emails : this.fb.array([""])
    })
  }

}
