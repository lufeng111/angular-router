# AngularRouter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## angular route 导航
  <!-- 
    单页面应用：浏览器进入一个index.html页面，浏览器页面不会跳转，执行某些操作时只会替换掉页面内容，但是不会重新加载整个页面，在非单页面应用中，点击商品进入商品详情，页面会跳转并重新加载页面所需的js,css文件等

    angular是一个spa(单页面应用)
  
   -->
## 路由器
  <!-- 
  路由器：控制整个应用视图状态的对象，每一应用都有一个路由器，需要配置这个路由器满足我们的需求，
  路由器的作用是给每一个视图分配一个唯一url，这样就可以使用url跳转到特定的视图状态，但是页面展示的仍然是index.html

  视图状态：可以把spa理解为一个视图状态的集合，
  -->
## angular route 导航的基础知识
<!-- 
  Routes: 路由配置，保存着那个URL对应展示那个组件，以及在那个RouterOutlet中展示组件
  RouterOutlet: 在html 中标记路由内容呈现位置的占位符指令
  Router: 负责在运行时执行路由的对象，可以通过调用其navigate()和navigateByUrl() 方法来导航到        一个指定的路由
  RouterLink: 在html中声明路由导航用的指令
  ActivatedRoute: 当前激活的路由对象，保存着当前路由的信息，如路由地址，路由参数等

 -->
## Routes 详解和使用
<!-- 
Routes：存在与模块中的，Routes 对象由一组配置信息组成，每一组配置信息至少包含两个属性path属性和component
  path: /user   ()
  component: A  (组件A)
当Routes是 /user时，展示A组件，是/order时展示B组件，但是AppComponent可能会有很多内容，那组件A要展示在具体哪个位置呢？
这就需要用到 RouterOutlet 指令来指定组件A的位置，把RouterOutlet 写在哪，组件A就展示在哪，如果我们想展示B组件的话，可以在
页面上通过一个链接来改变浏览器的地址，而RouterLink指令 就是在模板上生成这样一个链接，另外我们也可以在组件控制器中调用Router对象的 navigate方法来改变浏览器的地址，从而实现路由的转换，
最后，我们可以通过URL来传递一些数据，比如path: /user？name=lufeng, 这些数据就会保存在 ActivatedRoute 对象中，比如说从组件A路由到组件B时，我们可以通过组件B中的 ActivatedRoute 对象，来获取组件A的路由中携带的参数，

 -->
## 在路由中传递数据
<!-- 
1： 在查询参数中传递数据： 比如 /product?id=1&name=2  ==> ActivatedRoute.queryParams[id]
/product?id=1&name=2 (路由的路径，问号，参数名字等于参数的值，这种方式传递数据，使用这种方式传递数据的时候，在路由的目标组件中可以通过ActivatedRoute的参数queryParams来获取到目标组件中的数据，如果想拿到id的值ActivatedRoute.queryParams[id]，
如果想拿到name的值就是ActivatedRoute.queryParams[name])

2: 在路由的路径中传递数据： 比如 {path:/product/:id} ==> /product/1 ==> ActivatedRoute.params[id]
使用这种方式时，在定义路由的路径时，就要定义参数的名字 path:/product/:id，在实际的路径中携带这个参数 /product/1，在路由的目标组件中可以通过 ActivatedRoute.queryParams[id]) 来获取参数

3： 在路由的配置中传递数据： 比如 {path:/product, component: ProductComponent, data:[{isProd: true}]}  ==> ActivatedRoute.data[0][isProd]
在路由配置中，可以通过data这个参数来定义一些静态的数据，data参数本身是一个数组，在数组里可以定义多个对象，每一个对象里面可以定义任意的一些属性，
当这样定义数据时，就可以在这个路由的目标组件中，通过ctivatedRoute.data[0][isProd]拿到data参数所定义的这个数组，通过数组下标拿到指定的对象，访问其中的属性来获取到你在路由中定义中所传递的数据


 -->
 ## 重定向路由
 <!-- 
 解决问题：一进入页面就显示home组件，但是localhost的url还是 localhost：4200 
  // 重定向路由: 当url是空字符串的时候，就匹配到home组件
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  -->
  ## angular router 导航的子路由
  <!-- 
  {path: 'home', component: HomeComponent},
  {path: 'home', component: HomeComponent, 
  children:[
    {path: '', component: XxxComponent},
    {path: '/yyy', component: YyyComponent},
  ]
  },
  当路由配置好之后，访问home组件时，会展示HomeComponent组件的模板，同时home组件<outlink>位置展示XxxComponent组件的内容，
  当访问home/yyy 时，依然会展示HomeComponent组件的模板，同时home组件<outlink>位置展示YyyComponent组件的内容，
  注意：在app.component 中有一个<router-outlet></router-outlet> ，在product.component中也有一个 <router-outlet></router-outlet>，这样会形成插座的父子关系，这个关系可以一直没有限制的嵌套下去，
  其次：路由信息都是在模块上的，组件本身并不知道任何路由信息，所以组件是可以放到任何地方去用的
   -->

## 辅助路由
<!-- 
声明一个辅助路由需要三步：
辅助路由第一步：
组件模板上除了有主的插座<router-outlet>之外，还要有带有name属性的<router-outlet插座
如： 主插座：<router-outlet></router-outlet>
    辅助插座： <router-outlet name="aux"></router-outlet>
    
    在路由配置上显示 名字叫name="aux" 的插座上可以显示哪些组件 outlet: "aux"
    {path: 'xxx', component: XxxHomeComponent, outlet: "aux"},
    {path: 'yyy', component: YyyHomeComponent, outlet: "aux"},

    在导航的时候，比如说点击Xxx,主插座会显示home组件，辅助插座aux会显示xxx这个组件，
    <a [routerLink]="['/home', {outlets: {aux: 'xxx'}}]">Xxx</a> 
    <a [routerLink]="['/product', {outlets: {aux: 'yyy'}}]">Yyy</a> 

    在前面的例子中，一个组件的模板上只有一个插座，而辅助路由允许定义多个插座，并同时控制每一个插座的显示内容，比如说在拍卖系统中，加入即时聊天功能，
    这个功能可以在任何页面使用，
    思路： 
    1： 在app组件的模板上在定义一个插座来显示聊天面板
    2： 单独开发一个聊天室组件，只显示在新定义的插座上
    3： 通过路由参数控制新插座是否显示聊天面板

 -->

## 路由守卫
 <!-- 
  只有当用户已经登录并拥有某些权限时才能进入某些路由

  一个由多个表单组件组成的向导，例如注册流程，用户只有在当前路由的组件中填写了满足要求的信息才可以导航到下一个路由

  当用户未执行保存操作而试图离开当前导航时提醒用户
  三中路由守卫：
  CanActivate: 处理导航到某路由的情况
  CanDeactivate: 处理从当前路由离开的情况
  Resolve: 在路由激活之前获取数据
 
   -->
  
## Resolve守卫：解决的问题？
<!-- 
  当我们进入到一个路由，比如说商品详情路由，一般的传统的做法是在进入路由的时候携带一个参数比如说商品的ID进入路由里面，在组件内部拿到这个商品的id以后,并在ngOnInit()方法中发送http请求，拿到商品的详细信息，但是在发送请求返回数据时可能会有延迟，导致这个组件的模板没法立即显示出来，在这种情况下，模板上用插值表达式展示的数据全部都是空的，会导致用户体验不怎么样，resolve 就是解决这个问题的，
  使用resolve守卫，我可以预先在进入路由之前，在服务器上读取数据，把数据都读好之后，带着这些数据进入路由把这些数据展示在页面上

 -->
