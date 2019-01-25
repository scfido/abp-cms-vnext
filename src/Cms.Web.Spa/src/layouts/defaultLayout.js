import { Avatar, Dropdown, Icon, Layout, Menu } from "antd";
import React, { PureComponent } from 'react';
import Link from 'umi/link';
import NavigationMenu from "../components/NavigationMenu";
import styles from './styles/defaultLayout.less';
const { Header, Content, Sider } = Layout;

const menu = (
    <Menu className={styles.userMenu}>
        <Menu.Item><Icon type="profile" /> 个人信息</Menu.Item>
        <Menu.Item><Icon type="setting" /> 设置</Menu.Item>
        <Menu.Divider />
        <Menu.Item><Icon type="logout" /> 注销</Menu.Item>
    </Menu>
);

export default class DefaultLayout extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
        this.props.dispatch({ type: 'app/getUserMenu', payload: { menuType: "MainMenu" } });
    }

    toggleSiderMenu = () => {
        let status = this.props.sidebarStatus === "expand" ? "collapsed" : "expand";
        this.props.dispatch({ type: "app/changeSidebarStatus", payload: status });
    }

    createSider(menus) {
        if (!menus || menus.length === 0)
            return;

        //获取主菜单的子菜单
        let mainMenuKey, subMenu;
        if (this.state.selectedMainMenu)
            mainMenuKey = this.state.selectedMainMenu.key;
        else
            mainMenuKey = menus[0].name;

        subMenu = menus.find(menu => menu.name.startsWith(mainMenuKey));
        if (this.props.sidebarStatus !== "hide" && subMenu && subMenu.items.length > 0) {
            return <Sider className={styles.siderMenu} trigger={null} collapsible collapsed={this.props.sidebarStatus === "collapsed"}>
                <NavigationMenu menus={subMenu.items} mode="inline" />
            </Sider>
        }
    }

    render() {
        return (
            <Layout>
                <Header className={styles.headerBox}>
                    <div className={styles.logo}></div>
                    {this.props.sidebarStatus === "hide" || <div className={styles.trigger} onClick={this.toggleSiderMenu.bind(this)} ><Icon type={this.props.sidebarStatus === "expand" ? "menu-unfold" : "menu-fold"} /></div>}
                    <div className={styles.navMenu}>
                        <NavigationMenu menus={this.props.menus} mode="horizontal" topOnly={true} />
                    </div>
                    <div className={styles.headerTools}>
                        <Link className={styles.action} to="/login">登陆</Link>
                        <Link className={styles.action} to="/register">注册</Link>
                        <Link className={styles.action} to="/admin/organization" title="系统管理"><Icon type="setting" /></Link>
                        <Dropdown overlay={menu}>
                            <span className={`${styles.action} ${styles.account}`}>
                                <Avatar icon="user" size="small" className={styles.avatar} />
                                <span>Admin</span>
                            </span>
                        </Dropdown>
                    </div>
                </Header>
                <Layout>
                    {this.createSider(this.props.menus)}
                    <Layout>
                        <Content className={styles.content}>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout >
        )
    }
};
