import React from 'react';
import { Card } from 'antd';
import { ItemPanel, Item } from 'gg-editor';
import styles from './index.less';

class FlowItemPanel extends React.Component {
  render() {
    return (
      <ItemPanel className={styles.itemPanel}>
        <Card bordered={false}>
        <Item
            type="node"
            size="48*48"
            shape="flow-start"
            model={{
              color: '#31fa16',
              label: '开始',
            }}
            src="/images/start.svg"
          />
        <Item
            type="node"
            size="48*48"
            shape="flow-end"
            model={{
              color: '#fa1e16',
              label: '结束',
            }}
            src="/images/end.svg"
          />
          <Item
            type="node"
            size="80*48"
            shape="flow-rect"
            model={{
              color: '#1890FF',
              label: '处理节点',
            }}
            src="/images/process.svg"
          />
          <Item
            type="node"
            size="80*72"
            shape="flow-rhombus"
            model={{
              color: '#13C2C2',
              label: '判断',
            }}
            src="/images/decide.svg"
          />
          <Item
            type="node"
            size="80*48"
            shape="flow-capsule"
            model={{
              color: '#1890FF',
              label: '会签',
            }}
            src="/images/contersign.svg"
          />
          <Item
            type="node"
            size="80*48"
            shape="flow-capsule"
            model={{
              color: '#722ED1',
              label: '抄送',
            }}
            src="/images/cc.svg"
          />
        </Card>
      </ItemPanel>
    );
  }
}

export default FlowItemPanel;
