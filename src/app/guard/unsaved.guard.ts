import { CanDeactivate } from '@angular/router';
import { ProductComponent } from '../product/product.component';
/*
UnsavedGuard未保存守卫，这个守卫是确保用户执行了保存操作才能离开这个页面，CanDeactivate方法 和 CanActivate方法 不太一样，有一个泛型ProductComponent
这个泛型是指定当前组件的类型，因为要保护的组件是ProductComponent，所以这个泛型直接写组件的名字

现在加到路由配置上
*/

export class UnsavedGuard implements CanDeactivate<ProductComponent> {
  // canDeactivate也有一个方法需要实现，这个方法的第一个参数就是ProductComponent
  canDeactivate(component: ProductComponent){
    return window.confirm("你还没有保存，确定要离开吗？")
  }
}
