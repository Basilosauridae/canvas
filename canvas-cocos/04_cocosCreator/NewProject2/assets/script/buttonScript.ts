// 组件方法的调用
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    @property 
    toLeft:boolean = true

    onLoad () {
        this.node.on('mousedown',this.onClicked,this)
    }

    // start () {}

    // update (dt) {}
    onClicked(){
        let node:cc.Node = cc.find('Canvas/person')
        let script = node.getComponent('personScript')
        if(this.toLeft)
            script.moveLeft()
        else
            script.moveRight()
    }
}
