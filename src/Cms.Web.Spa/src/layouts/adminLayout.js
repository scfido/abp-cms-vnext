import { Avatar, Icon, Layout } from "antd";
import React, { PureComponent } from 'react';
import Link from 'umi/link';
import NavigationMenu from "../components/NavigationMenu";
import styles from './styles/adminLayout.less';

const { Header, Content, Sider } = Layout;

export default class DefaultLayout extends PureComponent {

    constructor(props) {
        super(props);
        this.props.dispatch({ type: 'app/getUserMenu', payload: { menuType: "Admin" } });
        this.state = {};
    }

    toggleSiderMenu = () => {
        let status = this.props.siderBar === "expand" ? "collapsed" : "expand";
        this.props.dispatch({ type: "app/siderBar", payload: status });
    }

    createSider = (menus) => {
        if (!menus || menus.length === 0)
            return;

        //获取主菜单的子菜单
        let mainMenuKey, subMenu;
        if (this.state.selectedMainMenu)
            mainMenuKey = this.state.selectedMainMenu.key;
        else
            mainMenuKey = menus[0].name;

        subMenu = menus.find(menu => menu.name.startsWith(mainMenuKey));
        if (this.props.siderBar !== "hide" && subMenu && subMenu.items.length > 0) {
            return <Sider className={styles.siderMenu} trigger={null} collapsible collapsed={this.props.siderBar === "collapsed"}>
                <NavigationMenu menus={subMenu.items} mode="inline" />
            </Sider>
        }
    }

    mainMenuSelectHandle(item, key, selectedKeys) {
        this.setState({ selectedMainMenu: item });
    }

    render() {
        return (
            <Layout>
                <Header className={styles.headerBox}>
                    <Link title="返回首页" to="/"><div className={styles.logo}></div></Link>
                    {this.props.siderBar === "hide" || <div className={styles.trigger} onClick={this.toggleSiderMenu.bind(this)} ><Icon type={this.props.siderBar === "collapsed" ? "menu-unfold" : "menu-fold"} /></div>}
                    <div className={styles.navMenu}>
                        <NavigationMenu menus={this.props.menus} onSelect={this.mainMenuSelectHandle.bind(this)} mode="horizontal" topOnly={true} />
                    </div>
                    <div className={styles.headerTools}>
                        <Link className={styles.action} to="/">返回首页</Link>
                        <span className={`${styles.account}`}>
                            <Avatar icon="user" size="small" className={styles.avatar} />
                            <span>Admin</span>
                        </span>
                    </div>
                </Header>
                <Layout>
                    {this.createSider(this.props.menus)}
                    <Layout id="content">
                        <Content className={styles.content}>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
};
