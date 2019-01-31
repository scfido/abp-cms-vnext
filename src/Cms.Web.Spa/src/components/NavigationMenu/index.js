import { Icon, Menu } from "antd";
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import Link from 'umi/link';

// 菜单项原型
// {
//     "name": "Todo.Index",
//     "icon": "list",
//     "displayName": "Todo",
//     "order": 0,
//     "url": "/todo",
//     "customData": null,
//     "target": null,
//     "isEnabled": true,
//     "isVisible": true,
//     "items": []
// }

//页面顶部和侧边栏导航菜单
export default class NavMenu extends PureComponent {

    createMenuItems(menus) {
        if (!menus)
            return null;

        return menus.map(menu => {
            if (menu.isVisible === false)
                return null;
            if (menu.items && menu.items.length > 0 && !this.props.topOnly)
                return this.createSubMenuItem(menu);
            else
                return this.createMenuItem(menu);
        })
    }

    createSubMenuItem(menu) {
        let title = <span><Icon type={menu.icon} /><span>{menu.displayName}</span></span>
        return (<Menu.SubMenu key={menu.name} title={title} >{this.createMenuItems(menu.items)}</Menu.SubMenu>)
    }

    createMenuItem(menu) {
        let item;
        if (menu.url) {
            item = <Link to={menu.url}><Icon type={menu.icon} /><span>{menu.displayName}</span></Link>
        }
        else {
            item = <><Icon type={menu.icon} /><span>{menu.displayName}</span></>
        }

        return (
            <Menu.Item key={menu.name} disabled={menu.isEnabled === false} >
                {item}
            </Menu.Item>);
    }

    render() {
        let { menus, topOnly, ...other } = this.props;
        return (<Menu {...other}>
            {this.createMenuItems(menus)}
        </Menu>)
    }
};

//限定控件传入的属性类型
NavMenu.propTypes = {
    topOnly: PropTypes.bool,    //即使包含子菜单也只显示顶层菜单，用于主导航菜单。
    menus: PropTypes.array.isRequired,
}

//设置默认属
NavMenu.defaultProps = {
    topOnly: false,
}
