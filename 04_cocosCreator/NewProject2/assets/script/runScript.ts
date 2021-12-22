// 动画-奔跑的小新

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    speed:number = 3 //速度 每次移动3个像素

    direction:cc.Vec2 = null // 方向 如水平向右（1,0）  竖直向下（0，-1）


    onLoad () {
        cc.systemEvent.on('keydown',this.onKeyPress,this)
    }

    // start () {}

    /* update (dt) {
        // 每次更新调用的函数 当位置大于250像素截至 否则一直往右移动5个像素（自动打开移动）
        if(this.node.x >= 250) return 
        this.node.x += 5
    } */

    onKeyPress(e:cc.Event.EventKeyboard){
        if(e.keyCode == cc.macro.KEY.a)
            this.direction = cc.v2(-1,0)
        else if(e.keyCode == cc.macro.KEY.d)
            this.direction = cc.v2(1,0)
        else if(e.keyCode == cc.macro.KEY.w)
            this.direction = cc.v2(0,1)
        else if(e.keyCode == cc.macro.KEY.s)
            this.direction = cc.v2(0,-1)
        else if(e.keyCode == cc.macro.KEY.space)
            this.direction = null
    }

    update(dt) {
        if(this.direction == null) return //原地不动

        let pos:cc.Vec2 = this.node.getPosition()
        pos.x += this.speed * this.direction.x
        pos.y += this.speed * this.direction.y

        this.node.setPosition(pos)
    }
}
