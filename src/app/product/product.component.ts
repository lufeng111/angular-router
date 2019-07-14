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
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
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
    this.routeInfo.params.subscribe((params: Params) => this.productId = params["id"]);
  }

}
