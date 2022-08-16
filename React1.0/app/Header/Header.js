import React from "react";
import './Header.css';
// import styled from 'styled-components';
// import Flex from '../../components/Flex/Flex';
// 索引文件的时候，找到的是NavbarItem里面的index
// import NavbarItem, {Link} from "./components/NavbarItem";

// const Highlight = styled.span`
//   color: #2eca7f;
// `;
// const Logo = styled.div`
//   font-size: 1.5rem;
//   font-weight: 500;
// `;
// // Nav是一个Flex，但是是一个添加了很多样式的Flex
// const Nav = styled(Flex)`
//   padding: 15px 0;
//   align-items: center;
// `;
//
// const Left = styled.div`
//   flex: 1;
// `;
// // function take string arguments, 省略（`flex:1`）-> div就是一个function
// const Right = styled.div`
//
// `;
// // const Navbar = styled.div`
// //   display: flex;
// // `;
//
// // Readable Maintainable
// // Reusable
/**
 * 判断当前页面是哪个，在当前页面的className里面增加一个 ‘navbar__item--active’
 * HTML 里面给的是“” 只要是attribute的值，永远都是双引号“”
 * JS里面是“”(市场占用率20%多) 或者 '' （市场占有率70%） ->根据项目要求，要统一；
 * */
const Header = (props) => {
    const {page} = props;
    // const page = "SERVICES";
    const navbarItems = [
        {key: 'HOME', value: 'Home'},
        {key: 'RESUME', value: 'Resume'},
        {key: 'SERVICES', value: 'Services'},
        {key: 'BLOG', value: 'Blog'},
        {key: 'CONTACT', value: 'Contact'}
    ];
    const getNavbarItemActiveClassName = (key) => page === key && 'navbar__item--active';
    const getNavbarItemClassName = (key) => `navbar__item ${getNavbarItemActiveClassName(key)}`;
    // const getNavbarItemClassName = (key) => `navbar__item ${page === key && 'navbar__item--active'}`;
    return (
        <header className="nav">
            <div className="nav__left">
                <div className="logo">
                    <span className="logo__highlight">Lisa</span>
                    GU
                </div>
            </div>
            <div className="nav__right">
                <div className="navbar">
                    { navbarItems.map((navbarItem) => (
                      <a
                          key ={navbarItem.key}
                          className={getNavbarItemClassName(navbarItem.key)} href={navbarItem.value}>
                          {navbarItem.value}
                      </a>
                    ))}
                    {/*<a className={getNavbarItemClassName('HOME')} href="HOME">Home</a>*/}
                    {/*<a className={getNavbarItemClassName('RESUME')} href="RESUME">Resume</a>*/}
                    {/*<a className={getNavbarItemClassName('SERVICES')} href="SERVICES">Services</a>*/}
                    {/*<a className={getNavbarItemClassName('BLOG')} href="BLOG">Blog</a>*/}
                    {/*<a className={getNavbarItemClassName('CONTACT')} href="CONTACT">Contact</a>*/}
                </div>
            </div>
        </header>
    );
}


export default Header;
