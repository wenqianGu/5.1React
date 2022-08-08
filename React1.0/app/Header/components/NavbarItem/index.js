// proxy -> 先引入 NavbarItem 再导出 NavbarItem
/**
 * import NavbarItem from "./NavbarItem";
 * export default NavbarItem;
 * */

// 简写
export {default} from './NavbarItem';
export {default as Link} from './Link';