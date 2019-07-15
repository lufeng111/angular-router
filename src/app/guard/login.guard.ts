import { CanActivate } from '@angular/router';

// LoginGuard 登录守卫，它实现angular框架提供的一个接口叫CanActivate，CanActivate只有一个方法CanActivate
// LoginGuard 现在把LoginGuard加到产品信息的路由上
export class LoginGuard implements CanActivate {
  canActivate() {
    // loggedIn 是布尔类型，Math.random()是一个0到1的随机数，这个随机数如果大于0.5就是没有登录
    const loggedIn: boolean = Math.random() < 0.5;
    // loggedIn如果这个随机数大于0.5就是false,判断一下并打印一句话 如果小于0.5就是true,并且直接返回loggedIn
    if ( !loggedIn ) {
      console.log("用户未登录");
    }

    return loggedIn;
  }
}
