// 事件冒泡-游戏遮罩案例

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on('touchstart',this.onTouch,this)
    }

    onTouch(e:cc.Event.EventTouch){
        this.node.active = false //此节点处于非激活状态
    }
}
