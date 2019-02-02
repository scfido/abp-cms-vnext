import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Modal, Form, Input } from 'antd';

class NodeEditor extends PureComponent {
  componentDidMount() {
  }

  componentWillReceiveProps(next) {
  }

  handleOk = (e) => {
    this.props.dispatch({ type: "workflow/changeEditorVisible", payload: false });
  }

  handleCancel = (e) => {
    this.props.dispatch({ type: "workflow/changeEditorVisible", payload: false });
  }

  render() {
    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>{this.props.id}</p>
          <p>{this.props.label}</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { id, label } = state.workflow.editNode || { id: "", label: "" };

  return {
    visible: state.workflow.nodeEditorVisible,
    id,
    label,
  }
}

export default connect(mapStateToProps)(NodeEditor);