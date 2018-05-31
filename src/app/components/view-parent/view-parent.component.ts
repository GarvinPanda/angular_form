import { Component, OnInit, ViewChild, AfterViewChecked, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.less']
})
export class ViewParentComponent implements OnInit,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked{

  constructor() { }
  // 检测销毁
  private hasTest:Boolean = true;

  rmTest(){
    this.hasTest = false;
  }

  ngAfterViewInit(): void {
    console.log("父组件的afterViewInit函数被执行了")
  }
  ngAfterViewChecked(): void {
    console.log("父组件的afterViewChecked函数被执行了")
  }

  ngAfterContentInit(): void {
    console.log("父组件contentInit函数被执行了")
  }
  ngAfterContentChecked(): void {
    console.log("父组件contentChecked函数被执行了")
  }
  ngDoCheck() {
    console.log('Do check');
  }
  
  @ViewChild("vc")
  private child: ViewChildComponent;

  fun1(){
    this.child.sayHello()
  }
  ngOnInit() {
  }

}
