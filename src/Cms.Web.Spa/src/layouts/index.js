import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import DefaultLayout from './defaultLayout';
import AdminLayout from './adminLayout';

class Layout extends React.PureComponent {

    render() {
        if (this.props.location.pathname.startsWith("/admin")) {
            return (<AdminLayout {...this.props}>{this.props.children}</AdminLayout>)
        }
        return (<DefaultLayout {...this.props}>{this.props.children}</DefaultLayout>)
    }
};

Layout.propTypes = {
    menus: PropTypes.array,
}

function mapStateToProps(state) {
    return {
        menus: state.app.menus,
        sidebarStatus: state.app.sidebarStatus,
    }
}

export default connect(mapStateToProps)(Layout);
