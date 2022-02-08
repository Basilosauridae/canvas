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
            this.unschedule(this.onTimer)
            
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
        this.explode()
        this.cheer()
    }
    failed(){
        cc.log('脱靶')
        this.dismiss()
    }
    // 爆炸效果
    explode(){
        cc.log('爆炸效果...')
        let sp:cc.Sprite = this.node.getComponent(cc.Sprite)
        sp.spriteFrame = this.explodeEffect

        this.node.scale = 0.1

        let self = this
        cc.tween(this.node)
            .to(0.4,{ scale:0.2 })
            .to(0.2,{ opacity:0 })
            .call(function(){ self.dismiss() })
            .start()

    }
    // 加分效果
    cheer(){
        let node:cc.Node = new cc.Node()
        let label:cc.Label = node.addComponent(cc.Label)
        label.string = "+10分"
        node.color = new cc.Color(255,0,0)
        node.parent = this.node.parent
        node.setPosition(cc.v3(0,250,0))
        node.opacity = 200

        cc.tween(node)
            .to(0.5,{ scale:1.5 })
            .to(0.2,{ opacity:0 })
            .call(function(){ node.destroy() })
            .start()
    }
}
