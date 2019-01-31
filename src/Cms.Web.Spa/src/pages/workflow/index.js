import React from 'react';
import { Row, Col } from 'antd';
import GGEditor, { Flow, RegisterCommand, withPropsAPI } from 'gg-editor';
import EditorMinimap from '../../components/WorkFlowEditor/EditorMinimap';
import FlowContextMenu from '../../components/WorkFlowEditor/FlowContextMenu';
import FlowToolbar from '../../components/WorkFlowEditor/FlowToolbar';
import FlowItemPanel from '../../components/WorkFlowEditor/FlowItemPanel';
import FlowDetailPanel from '../../components/WorkFlowEditor/FlowDetailPanel';
import NodeProperty from '../../components/WorkFlowEditor/NodeProperty';

import styles from './index.less';

class FlowPage extends React.Component {

  state = { propertyDailogVisible: false }

  componentDidMount() {
    this.propsAPI = this.props.propsAPI;
  }

  renderFlow() {
    return (<Flow className={styles.flow} onNodeDoubleClick={this.handlNodeDoubleClick} />)
  }

  handlNodeDoubleClick = (node) => {
    console.log(node);
    this.setState({ propertyDailogVisible : true })
  }

  save = (data) => {
    console.log(data)
  }

  render() {
    return (
      <GGEditor className={styles.editor}>
        <Row type="flex" className={styles.editorHd}>
          <Col span={24}>
            <FlowToolbar onSave={this.save} />
          </Col>
        </Row>
        <Row type="flex" className={styles.editorBd}>
          <Col span={4} className={styles.editorSidebar}>
            <FlowItemPanel />
          </Col>
          <Col span={16} className={styles.editorContent}>
            {this.renderFlow()}
          </Col>
          <Col span={4} className={styles.editorSidebar}>
            <FlowDetailPanel />
            <EditorMinimap />
          </Col>
        </Row>
        <FlowContextMenu />
        <NodeProperty visible={this.state.propertyDailogVisible} />
        <RegisterCommand name="save" config={{ queue: false, save: this.save }} />
      </GGEditor>
    );
  }
}


export default FlowPage;