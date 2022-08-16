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
const App = () => {
    const page = 'SERVICES';
    return (
        <div className="container">
            <Header page = {page} />
            <Page page = {page}/>
            <Footer />
        </div>
    );
}

export default App;