import React, { PureComponent } from 'react';
import { Modal, Form, Input } from 'antd';
import { withPropsAPI } from 'gg-editor';

class NodeProperty extends PureComponent {
  state = { visible: false }

  componentDidMount() {
  }

  componentWillReceiveProps(next) {
    const { propsAPI } = this.props;
    let nodes = propsAPI.getSelected();
    if (nodes && nodes.length > 0) {
      let { id, label } = nodes[0].model;

      this.setState({
        visible: next.visible,
        id,
        label
      });
    }
    else
      this.setState({
        visible: next.visible,
      });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>{this.state.id}</p>
          <p>{this.state.label}</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default withPropsAPI(NodeProperty);