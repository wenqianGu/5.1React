import styled from 'styled-components';

const NavbarItem = styled.div`
  padding: 16px;
  text-decoration: none;
  color: #49515d;
  font-size: 15px;
  opacity: 0.6;
  display: block;
  transition: opacity 0.3s ease-in-out;
  /*SCSS*/

  &::after {
    content: "";
    width: 0;
    border-bottom: 3px solid #377e9a;
    margin: auto;
    margin-top: 4px;
    display: block;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    opacity: 1;
  }

  &:hover::after {
    width: 24px;
  }

  //The :last-of-type selector matches every element that is the last child, of a particular type, of its paren
  &:last-of-type {
    padding-right: 0;
  }
`;

export default NavbarItem;