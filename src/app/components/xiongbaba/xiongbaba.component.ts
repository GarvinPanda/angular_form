import { Component, OnInit } from '@angular/core';
import { User } from '../../class-box/user';

@Component({
  selector: 'app-xiongbaba',
  templateUrl: './xiongbaba.component.html',
  styleUrls: ['./xiongbaba.component.less']
})
export class XiongbabaComponent implements OnInit{

  constructor() { }

  private message : String;
  private user:User = new User("xiong",18);
  
  ngOnInit() {
  }

}
