/*
这个文件就是整个应用的路由的配置，新生成 AppRoutingModule 这样一个模块，然后在主模块 app.module.ts 的元数据中导入这个路由模块，
在 routes 中所有的路由配置，都会通过 AppRoutingModule 导入到 主模块 app.module中，


 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Code404Component } from './code404/code404.component';

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
  {path: '', component: HomeComponent},
  // 当路由路径是 product时，展示 ProductComponent 组件
  {path: 'product', component: ProductComponent},
  // 注意** 通配符路由一定要放在最后面
  {path: '**', component: Code404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
