import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  // 第一种路由传参
  // private productId: number;
  // constructor(private routeInfo: ActivatedRoute) { }

  // 第二种路由传参
  private productId: number;
  private productName: string;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    // snapshot的类型就是ActivatedRouteSnapshot ，从 snapshot 就可以拿到当前路由的参数，this.routeInfo.snapshot 实际上
    // 已经作为resolve已经传递进去了，可以直接在product.resolve.ts中拿到一些路由 的参数
    // this.routeInfo.snapshot.params["id"];
    // 第一种路由传参
    // 在页面上通过差值表达式展示这个商品id
    // this.productId = this.routeInfo.snapshot.queryParams['id'];

    // 第二种路由传参
    // 参数快照snapshot 改为参数订阅 subscribe
    // this.productId = this.routeInfo.snapshot.params['id'];
    /*
    参数订阅:
    subscribe 订阅 params，params的类型是Params，根据拿到的params,给本地的productId 来赋值
     */
    this.routeInfo.params.subscribe((params: Params) => this.productId = params[' id']);
    // 订阅传进来的数据data
    this.routeInfo.data.subscribe((data: {product: Product}) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    })
  }

}

// 声明product类
export class Product {
  // 一个public 的id是number类型，一个public 的name是string类型
  constructor(public id: number, public name: string) {

  }
}
