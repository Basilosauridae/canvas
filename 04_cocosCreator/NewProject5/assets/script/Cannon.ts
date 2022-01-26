// 控制炮塔旋转的角度、子弹的发射和炮口方向一致

const {ccclass, property} = cc._decorator;

import Bullet from './Bullet'

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.SpriteFrame)
    bulletIcon:cc.SpriteFrame = null //子弹图片

    startPos:cc.Vec2 = null //触摸点开始的位置
    startAngle:number = null//触摸点开始的角度

    protected onLoad(): void {
        this.node.angle = 0 //设置初始角度

        this.node.on('touchstart',this.onTouchStart,this)
        this.node.on('touchmove',this.onTouchMove,this)
        this.node.on('touchend',this.onTouchEnd,this)
        this.node.on('touchcancel',this.onTouchEnd,this)
    }

    onTouchStart(e:cc.Event.EventTouch){
        // 获取当前触摸开始点 世界坐标转换为本地坐标
        this.startPos = this.node.parent.convertToNodeSpaceAR(e.getLocation())
        this.startAngle = this.node.angle
    }
    onTouchMove(e:cc.Event.EventTouch){
        let pos = this.node.parent.convertToNodeSpaceAR(e.getLocation())

        // 摆动的角度a.signAngle(b) 即a向量与b向量之间的夹角
        let sweep_radian = pos.signAngle(this.startPos)
        let sweep_angle = 180*sweep_radian/Math.PI //将弧度radian转化为角度angle

        // 炮口的指向 若原来炮口为90 向右摆动15° 则炮口应指向75°
        let angle = this.startAngle - sweep_angle
        // 炮口的角度限制在45°到135°之间
        if(angle < -45) angle = -45
        if(angle > 45) angle = 45

        // cc.log('炮口摆动'+sweep_angle+'修正后的角度'+angle)
        this.node.angle = angle
    }
    onTouchEnd(e:cc.Event.EventTouch){
        this.fire()
    }
    // 开火
    protected fire(): void {
        if(this.bulletIcon==null){cc.log('请设置子弹图片');return}

        // 炮口的指向就是子弹的运行方向
        let angle:number = this.node.angle
        let radian = angle * Math.PI/180 + 90
        let direction = cc.v2(Math.cos(radian),Math.sin(radian)) //标准化向量

        // 动态创建一个Node,添加Sprite组件
        let bulletNode:cc.Node = new cc.Node()
        let sprite:cc.Sprite = bulletNode.addComponent(cc.Sprite)
        sprite.spriteFrame = this.bulletIcon //设置子弹的图片

        bulletNode.parent = this.node.parent //指定父节点

        // 角度及初始位置
        bulletNode.angle = this.node.angle//子弹的角度
        let r = 60 //子弹与射击基准的距离
        let bullet_x = r*direction.x
        let bullet_y = r*direction.y
        bulletNode.setPosition(cc.v3(bullet_x,bullet_y,0)) //子弹的初始位置

        // 给子弹附加脚本组件
        let bullet:Bullet = bulletNode.addComponent(Bullet)
        bullet.direction = direction
    }
} 
