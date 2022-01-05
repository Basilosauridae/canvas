// 附加脚本组件-子弹脚本

const {ccclass, property} = cc._decorator;

@ccclass
export default class BulletScript extends cc.Component{
// export default class NewClass extends cc.Component { //规范化命名 NewClass更改一下

    onLoad () {
        this.schedule(this.onTimer,0.016)
    }

    onTimer () {
        if(this.node.y > 1000){
            this.unschedule(this.onTimer) //停止定时器
            this.node.destroy() //销毁节点
            return
        }
        this.node.y += 10
    }
}
