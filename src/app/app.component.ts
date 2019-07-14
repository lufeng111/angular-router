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
    /*
    点击主页，点击商品详情，再点击商品详情按钮，是正常的，但是先点击商品详情按钮，再点击商品详情链接就会有问题，url的id是正常的，但是在组件中获取到的id是不正常的
    这是因为从home组件到商品详情组件时，创建商品详情组件，调用一次ngOnInit()方法，但是从商品详情按钮到到商品详情组件时，因为组件已经存在，不会再次调用ngOnInit()方法
    所以productId的值依然保持第一次创建的时候的值，要解决这个问题方法就叫做参数订阅，  现在使用的方式就叫做snapshot 参数快照 ，如何把参数快照改成参数订阅，看组件product.component
    */

  this.router.navigate(['/product', 3]);
  }



}
