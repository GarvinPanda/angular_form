import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { User } from '../../class-box/user';

@Component({
  selector: 'app-xiongson',
  templateUrl: './xiongson.component.html',
  styleUrls: ['./xiongson.component.less']
})
export class XiongsonComponent implements OnInit,OnChanges,DoCheck {


 
  private count:number = 0;


  constructor() { }

    
  @Input()
  private message:string;

  @Input()
  private user:User;

  private text:string;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.count ++;
    console.log(`ngOnChanges函数被执行了${this.count}次`)
  }
  ngDoCheck(): void {
    this.count ++;
    console.log(`ngDoCheck函数被执行了${this.count}次`)
  }
}
