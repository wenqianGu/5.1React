import React from "react";
import HomePage from "./components/HomePage";
import ServicesPage from "./components/ServicesPage";
import BlogPage from "./components/BlogPage";
import ResumePage from "./components/ResumePage";
import ContactPage from "./components/ContactPage";
//JS 可以直接写HTML -> JSX

// const Page = () => (
//     <div className="pages">
//         <HomePage />
//         <div id="RESUME" className="page">Resume Page</div>
//         {/*<ServicesPage />*/}
//         <BlogPage />
//         <div id="CONTACT" className="page">CONTACT Page</div>
//     </div>
//
// );

//JS 直接写HTML ->JSX
//JSX 里面插入 JS片段 {}
// JSX 里面所有<>尖括号包起来的都被认为是HTML
// JSX里面所有花括号抱起来的都被认为是JS {}

// const page = 'SERVICES';

const Page = ({
                  page,
              }) => {
    //写法3 推荐写法
    return (
        <div className="pages">
            {page === 'HOME' && (<HomePage/>)}
            {page === 'RESUME' && (<ResumePage/>)}
            {page === 'SERVICES' && (<ServicesPage/>)}
            {page === 'CONTACT' && (<ContactPage/>)}
            {page === 'BLOG' && (<BlogPage/>)}
        </div>
    )
    //写法2
    // const currentPage = {
    //     HOME: (<HomePage/>),
    //     RESUME: (<ResumePage/>),
    //     SERVICES: (<ServicesPage/>),
    //     CONTACT: (<div id="CONTACT">Contact Page</div>),
    //     BLOG: (<BlogPage/>),
    // }[page];
    // return (
    //   <div className="pages">
    //       {currentPage}
    //   </div>
    // );

    // 写法1
    //Declarative 声明式的写法 ->提前训练好page组件 ； 而并非之前的命令式的写法
    // if(page === 'HOME'){
    //     return (
    //         <div className='pages'>
    //             <HomePage/>
    //         </div>
    //     )
    //
    // };
    // if(page === 'RESUME'){
    //     return (
    //         <div className='pages'>
    //             Resume Page
    //         </div>
    //     )
    //
    // };
    // if(page === 'SERVICES'){
    //     return (
    //         <div className='pages'>
    //             <ServicesPage/>
    //         </div>
    //     )
    //
    // };
    // if(page === 'BLOG'){
    //     return (
    //         <div className='pages'>
    //             <BlogPage/>
    //         </div>
    //     )
    //
    // };

}

export default Page;