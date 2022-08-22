# React Folder
## Component 划分度
* App
  * component
      * Header 
          * component 
             - Logo
             - Navigiation 
               - component 
                    - Items 
**Props**
* 当我们使用component时，相似的责任、UI会在
  * 不同的地方调用
  * 不同的形式调用 

**JavaScript如何让一个function 满足不同的条件** 
* sum 1+2 | 2+3
* arguments 通过传递参数的方法，让sum有不同的实现、业务场景 
**在JSX中**
* 在JSX中 花括号{} 里面的内容都是 JS
* 在JSX中，所有<>内的内容都被解释为HTML 

* Item 可以接受参数
```jsx
const Item = (href, text) =>{
<a className="navbar_item" href={href}>
{text}
</a>
}
```
* component传参 
* 当我们使用html element时，相似的责任/UI会在 不同的地方调用，不同的形式调用
* attribute 
```js
const sum = (...args) => args[0] + argos[1];
const sum = (a,b) => a+b;
sum(1,2);
```
* 在HTML中，我们使用attribute完成在不同地方，不同形式的调用 
```jsx
<a id = "home" href="Home">Home </a>
const Navigation = () => (
<div className="navbar">
  <Item href="HOME" text="Home"/>
  <Item href="RESUME" text="Resume"/>
  <Item href="SERVICES" text=""/>
  <Item href="HOME" text="Home/>
  <Item href="HOME" text="Home/>
</div>

)

```
