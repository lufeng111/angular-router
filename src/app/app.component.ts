/*
问题：登录或输入一个不存在的路径会怎么样？
在localhost后面输入一个不存在的路径，控制台会报错：不能匹配到这个路径，页面什么都没有
现在设置通配符: 生成一个code404组件，当输入一个不存在的url时就展示这个组件,注意通配符的路由一定要放在最后面

*/

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-router';
// router 的类型是 Router
constructor(private router: Router) {

}
// 这里需要用到 Router 对象，那么这个对象从哪里来？从控制器构造函数 constructor 中来
  toProductDetails() {
    // 调用router的navigate 方法
  this.router.navigate(['/product']);
  }



}
