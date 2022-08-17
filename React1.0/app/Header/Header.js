import React from "react";
// import './Header.css';
import styled from 'styled-components';
import Flex from '../../components/Flex/Flex';
// 索引文件的时候，找到的是NavbarItem里面的index
// import NavbarItem, {Link} from "./components/NavbarItem";

const Highlight = styled.span`
  color: #2eca7f;
`;
const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;
// // Nav是一个Flex，但是是一个添加了很多样式的Flex
const Nav = styled(Flex)`
  padding: 15px 0;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
`;
// function take string arguments, 省略（`flex:1`）-> div就是一个function
const Right = styled.div`

`;
const Navbar = styled.div`
  display: flex;
`;

const NavbarItem = styled.button`
    border:0;
    background: transparent;
    cursor: pointer;
    padding: 16px;
    text-decoration: none;
    color: #49515d;
    font-size: 15px;
    opacity: ${(props) => props.abc ? '1' : '0.6'}; 
    display: block;
    transition: opacity 0.3s ease-in-out;
  
    &::after {
        content: "";
        width: ${({abc}) => abc ? '24px' : '0'}; 
        border-bottom: 3px solid #377e9a;
        margin: auto;
        margin-top: 4px;
        display: block;
        transition: width 0.3s ease-in-out;
    }

    &:hover {
        opacity: 1;
    }


    &:hover::after {
        width: 24px;
    }
`;

// // Readable Maintainable
// // Reusable
/**
 * 判断当前页面是哪个，在当前页面的className里面增加一个 ‘navbar__item--active’
 * HTML 里面给的是“” 只要是attribute的值，永远都是双引号“”
 * JS里面是“”(市场占用率20%多) 或者 '' （市场占有率70%） ->根据项目要求，要统一；
 * */
// function component -> 用花括号的形式去接受参数；
const Header = ({
    page,
    onPageChange,
}) => {
    //const { page } = props;
    // const page = "SERVICES";
    const navbarItems = [
        { key: 'HOME', value: 'Home' },
        { key: 'RESUME', value: 'Resume' },
        { key: 'SERVICES', value: 'Services' },
        { key: 'BLOG', value: 'Blog' },
        { key: 'CONTACT', value: 'Contact' }
    ];
    // const getNavbarItemActiveClassName = (key) => page === key && 'navbar__item--active';
    // const getNavbarItemClassName = (key) => `navbar__item ${getNavbarItemActiveClassName(key)}`;
    // const getNavbarItemClassName = (key) => `navbar__item ${page === key && 'navbar__item--active'}`;
    return (
        <Nav>
            <Left>
                <Logo className="logo">
                    <Highlight>Lisa</Highlight>
                    GU
                </Logo>
            </Left>
            <Right>
                <Flex>
                    {navbarItems.map((navbarItem) => (
                        <NavbarItem
                            onClick = { () => {
                                onPageChange(navbarItem.key);
                            }}
                            key = {navbarItem.key}
                            abc={page === navbarItem.key}
                            href={navbarItem.value}
                        >
                            {navbarItem.value}
                        </NavbarItem>
                    ))}
                </Flex>
            </Right>
        </Nav>
        // <header className="nav">
        //     <div className="nav__left">
        //         <div className="logo">
        //             <span className="logo__highlight">Lisa</span>
        //             GU
        //         </div>
        //     </div>
        //     <div className="nav__right">
        //         <div className="navbar">
        //             { navbarItems.map((navbarItem) => (
        //               <a
        //                   key ={navbarItem.key}
        //                   className={getNavbarItemClassName(navbarItem.key)} href={navbarItem.value}>
        //                   {navbarItem.value}
        //               </a>
        //             ))}
        //             {/*<a className={getNavbarItemClassName('HOME')} href="HOME">Home</a>*/}
        //             {/*<a className={getNavbarItemClassName('RESUME')} href="RESUME">Resume</a>*/}
        //             {/*<a className={getNavbarItemClassName('SERVICES')} href="SERVICES">Services</a>*/}
        //             {/*<a className={getNavbarItemClassName('BLOG')} href="BLOG">Blog</a>*/}
        //             {/*<a className={getNavbarItemClassName('CONTACT')} href="CONTACT">Contact</a>*/}
        //         </div>
        //     </div>
        // </header>
    );
}


export default Header;
