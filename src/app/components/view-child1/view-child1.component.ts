import { Component, OnInit, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-view-child1',
  templateUrl: './view-child1.component.html',
  styleUrls: ['./view-child1.component.less']
})
export class ViewChild1Component implements OnInit,AfterContentInit,AfterContentChecked,OnDestroy {

  constructor() { }

  ngAfterContentInit(): void {
    // 当投影的内容组装(初始化)完毕时 会执行该函数
    console.log("子组件contentInit函数被执行了")
  }

  ngAfterContentChecked(): void {
    // 当投影的内容可能发生变化时 会执行该函数
    console.log("子组件contentChecked函数被执行了")
  }

  ngOnDestroy(): void { 
    //当组件会被卸载的时候 则会执行该函数
    console.log("子组件内卸载的生命周期函数被执行了")
  }
  ngOnInit() {
  }

}
