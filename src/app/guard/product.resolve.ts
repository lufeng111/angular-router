import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product/product.component';
import { Injectable } from '@angular/core';
/*
  Resolve 要声明一个泛型Product，这个泛型Product 就是要解析的数据的类型,先在product.component中声明一个Product类
 */
// ActivatedRouteSnapshot 查看 product.component
// 这里需要注意一下 router 需要用装饰器装饰一下，router 才能注入进来，component 不用这个装饰器是因为已经继承这个装饰器
@Injectable()
export class ProductResolve implements Resolve<Product> {
  // 从构造函数中注入进来route
  constructor(private router: Router) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product>|Promise<Product>|Product {
    const productId: number = route.params[' id'];
    if ( productId === 1 ) {
      // 如果id是1，就认为他是一个正确的id,如果不是1，就导航走
      return new Product(1, 'iPhone7');
    } else {
      // 这个route 从哪来？需要从构造函数中注入进来
      // 使用router 导航到home组件
      this.router.navigate(['/home']);
      return undefined;
    }

  }

}
