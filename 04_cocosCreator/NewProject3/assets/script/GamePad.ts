// 手柄的拖动、坐标的转换_汽车移动事件
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    car:cc.Node = null

    protected onLoad(): void {
        this.car = cc.find('Canvas/car')
    }

    start () {
        this.node.on('touchstart',this.onTouchStart,this)
        this.node.on('touchmove',this.onTouchMove,this)
        this.node.on('touchend',this.onTouchCancel,this)
        this.node.on('touchcancel',this.onTouchCancel,this)
    }

    // update (dt) {}

    onTouchStart(e:cc.Event.EventTouch){}

    onTouchMove(e:cc.Event.EventTouch){
        /* cc.log('世界坐标',e.getLocation().x,e.getLocation().y) */
        // e.getLocation()为点击的位置 是世界坐标
        // 1.要把世界坐标转化为本地坐标
        let parent:cc.Node = this.node.parent //父节点 圆形底盘
        let pos:cc.Vec2 = parent.convertToNodeSpaceAR(e.getLocation())
        this.node.setPosition(pos)

       /*  cc.log('本地坐标',pos.x,pos.y) */

        //  2.该点所在的方位 用cos和sin表示
        let direction:cc.Vec2 = pos.normalize()
       /*  cc.log('方位：cos='+direction.x+',sin='+direction.y) */

        // 3.限制手柄拖动的范围在底盘内部
        let maxR = 100*0.8 //最大距离
        let r:number = cc.Vec2.distance(pos,cc.v2(0,0)) //实际距离 distance方法求两点之间的距离
        if(r > maxR){
            pos.x = maxR*direction.x // r*cos
            pos.y = maxR*direction.y // r*sin
        }
        this.node.setPosition(pos)

        // 4.根据手柄的方向同步小车移动的方向
        /* 弧度值radian = a.angle(b) 求a和b两个向量的夹角
           cc.v2(1,0)表示x轴方向的单位向量
         */
        let radian = pos.signAngle(cc.v2(1,0))
        let angle = radian/Math.PI*180
        this.car.angle = -angle //按API要求，angle是按顺时针为正
    }

    onTouchCancel(){
        this.node.setPosition(cc.v3(0,0,0))
    }
}
