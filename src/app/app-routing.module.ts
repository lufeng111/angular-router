/*
这个文件就是整个应用的路由的配置，新生成 AppRoutingModule 这样一个模块，然后在主模块 app.module.ts 的元数据中导入这个路由模块，
在 routes 中所有的路由配置，都会通过 AppRoutingModule 导入到 主模块 app.module中，


 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Code404Component } from './code404/code404.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ChatComponent } from './chat/chat.component';
import { LoginGuard } from './guard/login.guard';
import { UnsavedGuard } from './guard/unsaved.guard';
import { ProductResolve } from './guard/product.resolve';

/*
Routes 属性：实际上是一组路由对象，里面最起码有两个属性，path和component
现在router 中配置的路由都是都是根路由，从根路由中找到product
*/
const routes: Routes = [
  /*
  注意：path变量中不能用斜线开头，比如path: '/product',这样写，  是因为angular的路由器会被解析生成url,
  不用斜杠开头是为了在在多个视图间导航时可以自由的使用绝对路径和相对路径
  */
  // 当路由路径是 '' 是空时，展示 home 组件
  // 重定向路由: 当url是空字符串的时候，就匹配到home组件
  // 这是根路由
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'chat', component: ChatComponent, outlet: 'aux'},
  {path: 'home', component: HomeComponent},
  // 当路由路径是 product时，展示 ProductComponent 组件
  {path: 'product/:id', component: ProductComponent,
  // 这是子路由
  children: [
    {path: '', component: ProductDescComponent},
    {path: 'seller/:id', component: SellerInfoComponent}
  ], resolve: {
    product: ProductResolve
  }
  // resolve 是一个对象，传一个product属性，这个属性由ProductResolve 生成
  // canActivate: [LoginGuard], canDeactivate: [UnsavedGuard]

},
/*
UnsavedGuard 路由的使用方法和LoginGuard 一样，canDeactivate: [UnsavedGuard] 也是接收一个数组，这有数组中所有守卫都返回true时，才会离开当前路由，如果有一个守卫返回false 就留在当前路由,
 比如当从商品详情组件返回到主页时，会有一个提示信息，点击确定之后，会跳转到主页去，点取消依赖留在当前路由中
*/
/*  LoginGuard 加到产品信息的路由上，先添加canActivate属性，接收一个数组，数组意思是可以添加多个路由守卫，当应用视图进入这个产品信息的路由时，
依赖这个数组的路由守卫会被依次调用，如果其中一个路由守卫返回false,路由请求就会被拒绝掉，我们现在只有一个LoginGuard登录护卫，这里只是指定了一个路由护卫的类型LoginGuard类，
但是谁来实例化这个路由护卫，angular会使用一个依赖注入的机制,实例化这个路由守卫，最后在这个模块的providers里面再声明一次LoginGuard,现在商品信息的路由就被这个LoginGuard守卫保护起来了
当在主页点击商品详情，如果打印用户未登录，那么商品详情组件就不展示，如果没有打印，就正常显示
*/
  // 注意** 通配符路由一定要放在最后面
  {path: '**', component: Code404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [LoginGuard, UnsavedGuard],
  providers: [ProductResolve],

})
export class AppRoutingModule { }
