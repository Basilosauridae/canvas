// 手柄的拖动、坐标的转换_汽车移动事件
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    start () {
        this.node.on('touchstart',this.onTouchStart,this)
        this.node.on('touchmove',this.onTouchMove,this)
        this.node.on('touchend',this.onTouchEnd,this)
        this.node.on('touchcancel',this.onTouchCancel,this)
    }

    // update (dt) {}

    onTouchStart(e:cc.Event.EventTouch){}

    onTouchMove(e:cc.Event.EventTouch){
        /* cc.log('世界坐标',e.getLocation().x,e.getLocation().y) */
        // e.getLocation()为点击的位置 是世界坐标
        // 要把世界坐标转化为本地坐标
        let parent:cc.Node = this.node.parent //父节点 圆形底盘
        let pos:cc.Vec2 = parent.convertToNodeSpaceAR(e.getLocation())
        this.node.setPosition(pos)

       /*  cc.log('本地坐标',pos.x,pos.y) */

    }

    onTouchEnd(){}

    onTouchCancel(){
        this.node.setPosition(cc.v3(0,0,0))
    }
}
