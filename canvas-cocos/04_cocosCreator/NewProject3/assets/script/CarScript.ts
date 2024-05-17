// 小车的运动

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    speed:number = 3 //每次刷新时移动的距离
    direction:cc.Vec2 = null //移动的方向,cc.Vec2表方位 sin和cos


    update (dt) {
        if(this.direction == null) return //静止
            
        let dx = this.speed * this.direction.x
        let dy = this.speed *this.direction.y

        let pos = this.node.getPosition()
        pos.x += dx
        pos.y += dy
        this.node.setPosition(pos)
    }
}
