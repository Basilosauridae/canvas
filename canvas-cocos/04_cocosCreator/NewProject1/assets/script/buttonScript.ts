// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on('mousedown',this.onClicked,this)
    }

    start () {

    }

    onClicked(){
        // 1.找到节点移动位置
        // let node:cc.Node = cc.find('Canvas/b/name')
        // node.setPosition(-54,-575)

        // 2.找到节点后 再找到对应组件移动
        // let targetNode:cc.Node = cc.find('Canvas/b/name')
        // let label:cc.Label = targetNode.getComponent(cc.Label)
        // label.string = '点击改变姓名'

        // 3.获取节点 再得到节点下的脚本组件
        let targetNode:cc.Node = cc.find('Canvas/b/name')
        let script = targetNode.getComponent('simpleScript')
        script.doChange()

    }
    // update (dt) {}
}
