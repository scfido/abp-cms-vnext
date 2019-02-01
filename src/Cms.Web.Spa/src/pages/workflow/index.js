import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import GGEditor, { Flow, RegisterCommand, withPropsAPI } from 'gg-editor';
import EditorMinimap from '../../components/WorkFlowEditor/EditorMinimap';
import FlowContextMenu from '../../components/WorkFlowEditor/FlowContextMenu';
import FlowToolbar from '../../components/WorkFlowEditor/FlowToolbar';
import FlowItemPanel from '../../components/WorkFlowEditor/FlowItemPanel';
import FlowDetailPanel from '../../components/WorkFlowEditor/FlowDetailPanel';
import NodeEditor from '../../components/WorkFlowEditor/NodeEditor';

import styles from './index.less';
import { func } from 'prop-types';

class FlowPage extends React.Component {

  componentDidMount() {
  }

  renderFlow=()=> {

    return (<Flow className={styles.flow} onNodeDoubleClick={this.handlNodeDoubleClick.bind(this)} />)
  }

  handlNodeDoubleClick = (node) => {
    // const { propsAPI } = this.props;
    // let nodes = propsAPI.getSelected();
    const { label, id } = node.item.model;

    this.props.dispatch({
      type: 'workflow/showEditor',
      payload: {
        visible: true,
        node: { id, label },
      }
    })
  }

  save = (data) => {
    console.log(data)
  }

  render() {
    return (
      <>
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
        <NodeEditor visible={this.props.nodeEditorVisible} />
        <RegisterCommand name="save" config={{ queue: false }} />
      </>
    );
  }
}

class Editor extends PureComponent {
  render() {
    const Page = withPropsAPI(FlowPage)
    return (
      <GGEditor className={styles.editor} >
        <Page {...this.props}/>
      </GGEditor>
    );
  }
}

export default connect()(Editor);