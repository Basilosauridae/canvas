// 子弹的飞行

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    direction:cc.Vec2 = null //飞行的方向 标准化向量

    target:cc.Node = null //靶标

    explodeEffect:cc.SpriteFrame = null //爆炸效果


    start () {
        this.schedule(this.onTimer,0.016)
    }

    onTimer(){
        if(this.node.y > 400){//靶标与射击基准之间的距离
            // this.dismiss()
            // return
            if(this.isHit())
                this.success()
            else
                this.failed()
            return

        }
        let speed:number = 15 //步长
        let dx = speed * this.direction.x
        let dy = speed * this.direction.y

        this.node.x += dx
        this.node.y += dy
    }

    dismiss(){
        this.node.destroy()
    }

    // 检出是否命中目标函数
    isHit():boolean{
        let targetPos:cc.Vec2 = this.getWordLocation(this.target)
        let selfPos:cc.Vec2 = this.getWordLocation(this.node)
        let distance:number = Math.abs(targetPos.x - selfPos.x) //x距离方向
        cc.log('靶标x='+ targetPos.x + ',子弹x='+selfPos.x)
        
        if(distance < 50) return true
        return false
    }
    // 获取一个节点的时间坐标
    getWordLocation(node:cc.Node):cc.Vec2{
        let pos = node.getPosition()
        return node.parent.convertToWorldSpaceAR(pos)
    }
    success(){
        // 添加成功的特效
        cc.log('命中目标')
        this.dismiss()
    }
    failed(){
        cc.log('脱靶')
        this.dismiss()
    }
}
