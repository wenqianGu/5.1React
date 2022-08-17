import React from "react";
import Header from "./app/Header";
import Footer from "./app/Footer";
import HomePage from "./app/Page/components/HomePage/HomePage";
import Page from "./app/Page";
/**
 * Component App 在调用Page的时候，给页面传递了一个参数 page = {page};
 * // pass page to header as arg
 *  // pass page to Page as arg
 * */
// const App = () => {
//     let page = 'SERVICES';
//     return (
//         <div className="container">
//             <Header page = {page} />
//             <Page page = {page}/>
//             <Footer />
//         </div>
//     );
// }
class App extends React.Component {
    constructor(props) {
        super(props);
        // 在react里面，通过声明一个state来保存一个持久化的变量 
        // 初始化的state page的值是blog ， 通过更改state的值，来修改绘制的页面；
        this.state = {
            page: 'HOME',
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }
    // class component里面可以写method
    handlePageChange(newPage) {
        this.setState({
            page:newPage,
        });
    }

    render() {
        const { page } = this.state;
        // 这里只是简单的标准的JS赋值，这里没有React的参与 
        // React 就不知道需要去做协调，去更新结果 
        // this.state.page = 'RESUME';
        // 怎么让给react 参与进来？ 
        // React -> setState 
        // 把this.state 更新到最新值；
        // 执行协调（reconsolidation）更新内容

        return (
            <div className="container">
                {/* <button onClick={ () => this.handlePageChange('SERVICES')}>Setp page state to Services</button> */}
                <Header 
                // 函数是平头老百姓
                // 传递两个props给Header 
                onPageChange = {this.handlePageChange}
                page={page} />
                <Page page={page} />
                <Footer />
            </div>
        )
    }
}

export default App;
