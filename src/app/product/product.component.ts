import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    this.productId = this.routeInfo.snapshot.params['id'];
  }

}
