// 附加脚本组件-子弹脚本

const {ccclass, property} = cc._decorator;

@ccclass
export default class BulletScript extends cc.Component{
// export default class NewClass extends cc.Component { //规范化命名 NewClass更改一下

    @property(cc.SpriteFrame)
    explodeEffect:cc.SpriteFrame = null

    onLoad () {
        this.schedule(this.onTimer,0.016)
    }
    
    onTimer () {
        if(this.node.y > 1000){
            this.unschedule(this.onTimer) //停止定时器
            this.beginExplode()//调用爆炸效果
            return
        }
        this.node.y += 10
    }
    // 爆炸效果
    beginExplode(){
        let sp:cc.Sprite = this.node.getComponent(cc.Sprite)
        sp.spriteFrame = this.explodeEffect //显示爆炸图片

        this.node.scale = 0.1

        let self = this //闭包语法
        cc.tween(this.node)
            .to(0.5,{scale:0.5,opacity:0})
            .to(0.3,{opacity:0})
            .call(function(){self.afterExplode()})
            .start()
    }

    afterExplode(){
        this.node.destroy()
    }
}
