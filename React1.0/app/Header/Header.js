import React from "react";
import styled from 'styled-components';
import Flex from '../../components/Flex/Flex';
// 索引文件的时候，找到的是NavbarItem里面的index
import NavbarItem, {Link} from "./components/NavbarItem";

const Highlight = styled.span`
  color: #2eca7f;
`;
const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;
// Nav是一个Flex，但是是一个添加了很多样式的Flex
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
// const Navbar = styled.div`
//   display: flex;
// `;

// Readable Maintainable
// Reusable

const Header = () => (
    <Nav>
        <Left>
            <Logo>
                <Highlight>Lisa</Highlight>
                GU
                <link/>
            </Logo>

        </Left>
        <Right>
            <Flex>
                <NavbarItem href="HOME">Home</NavbarItem>
                <NavbarItem href="RESUME">Resume</NavbarItem>
                <NavbarItem href="SERVICES">Services</NavbarItem>
                <NavbarItem href="BLOG">Blog</NavbarItem>
                <NavbarItem href="CONTACT">Contact</NavbarItem>
            </Flex>
        </Right>
    </Nav>
);

export default Header;
