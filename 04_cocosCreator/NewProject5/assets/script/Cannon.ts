// 控制炮塔旋转的角度

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

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
    onTouchEnd(){}
} 
