# React
* React build user interface
## 命令式语言 Imperative / 声明式语言 declarative
* Vanilla JavaScript 是命令式的，我们命令DOM更新
    ```js
document.querySelector('#resume-page').classLisat.add('page--active')
```
* SQL语句是声明式的 (where), 我们告诉数据库要什么，然后数据库就给你对应的数据，而不是通过API去取
    ```sql
select * from Products Where name='Alipay' LIMIT 10;
```

### examples
* 一家命令式餐馆， 从客人进入店开始
1. 老板告诉（命令）客人坐在N号桌
2. 客人向老板点餐（交互）
    3. 老板告诉（命令）后厨做几道什么样的菜
4. 老板告诉（命令） 厨师放什么原料，多少调料，几成熟
5. 老板上菜
* 一家声明式餐馆，从客人进入店开始
1. 当waitting zone 有客人时，服务员A带客人入座。
    2. 当客人进去服务员B管理区域时，服务员B点单
3. 当客人点好单，服务员B将单据送入后厨
4. 当后厨看到新的单据时，根据单据做菜
5. 当服务员C看到pick up区有菜品时，根据单据上菜

* 命令式的jsx
    ```jsx
    <button class="navItem" onclick="clickNavBar('resume')">Resume</button>
    document.querySelector('[href="RESUME"]').addEventListener('click',changePage)
    
    const changePage = () =>{
        document.querySelector('.page').forEach((p) => {
            p.classList.remove('page--active')
        }); //告诉页面，所有页面都隐藏起来 
        document.querySelector('#resumePage').classLisa.add('page--active');
        //命令document找到resume页面，给这页面加上一个page--active的class
        //命令resume页面加上一个page--active的class，然后给他显示出来

        document.querySelector('.navItems').forEach((ni) => ni.classList.remove('navItem--active'));
        document.querySelector('[href = "resume"]').classList.add('navItem--active');
        
    }

    ```
* 声明式代码 stick with HTML ->好的声明式代码
    * 关注点在UI上
    * React给了一种可能性，只写HTML 关注UI 尽量少写JS 完成复杂的功能
* 写HTML才是声明式，训练HTML去做交互
    ```jsx
    <button
    href = "home"
    class = {`navItem ${activePage === 'homePage' ? ' navItem---active':''}`}
    onclick = {activePage = 'homePage'}
    >
    Home
    </button>
    <button href = "resume"
    class = {`navItem ${avtivePage === 'resumePage' ? 'navItem === avtive': ''}`}
    onclick = {activePage = 'resumePage'}
    >
    Resume
    </button>

    <div class = {`page ${activePage === 'homePage' ? 'page ===active' : ''}`}>
    //...
    </div>

    <div class = {`page ${activePage === 'resumePage' ? 'page ===active' : ''}`}>
    //...
    </div>
    ```



### 3.b Component Based
* 网页程序在业务发展过程中，体积越来越大，其中堆叠了大量的业务逻辑代码，不同的业务模块代码相互调用，相互嵌套，代码之间的耦合性越来越高，调用逻辑会越来越混乱。当某个模块需要更新的时候，改动代码的时候往往会牵一发而动全身的感觉。特别是多人合作的情况下，代码的维护会让人崩溃
* SOLID

