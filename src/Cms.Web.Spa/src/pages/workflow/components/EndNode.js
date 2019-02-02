import React, { PureComponent } from "react";
import { RegisterNode } from "gg-editor";

class EndNode extends React.Component {
    render() {
        const config = {
            draw(item) {
                const keyShape = this.drawKeyShape(item);

                // 绘制标签
                this.drawLabel(item);

                return keyShape;
            },
            enable:true,

        };

        return (
            <RegisterNode name="flow-end" config={config} extend={"flow-rect"} />
        );
    }
}

export default EndNode;
