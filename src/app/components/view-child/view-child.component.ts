import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.less']
})
export class ViewChildComponent implements OnInit,AfterViewInit,AfterViewChecked {

  constructor() { }

  ngAfterViewInit(): void {
    //在组件视图被组装(初始化)完毕后执行该函数
    console.log("子组件的afterViewInit函数被执行了")
  }

  //注意: 在view系的生命周期函数中  一定是子组件先执行之后 父组件才会去执行
  ngAfterViewChecked(): void {
    //在组件视图有可能发生变化时执行该函数
    console.log("子组件的afterViewChecked函数被执行了")
  }

  sayHello(){
    console.log("子组件的sayHello方法被调用了");
  }

  ngOnInit() {
  }

}
