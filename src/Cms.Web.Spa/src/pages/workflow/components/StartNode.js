import { PureComponent } from "react";
import { RegisterNode } from "gg-editor";

class StartNode extends PureComponent {
    render() {
        const config = {
            draw(item) {
                const keyShape = this.drawKeyShape(item);

                // 绘制图标
                const group = item.getGraphicGroup();
                const model = item.getModel();
                
                // 绘制标签
                this.drawLabel(item);

                return keyShape;
            },
            enable:true,

        };

        return (
            <RegisterNode name="flow-start" config={config} extend={"flow-circle"} />
        );
    }
}

export default StartNode;
