// 动态创捷节点

import BulletScript from "./BulletScript";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.SpriteFrame)
    bulletIcon:cc.SpriteFrame = null

    @property(cc.AudioClip)
    audio:cc.AudioClip

    @property(cc.SpriteFrame)
    explodeEffect:cc.SpriteFrame = null

    onLoad () {
        this.node.on('touchstart',this.onTouch,this)
    }
    onTouch(){
        this.fire()
    }

    fire(){
        if(this.bulletIcon == null){
            cc.log('请设置bulletIcon图片')
            return
        }
        // 动态创建一个Node,添加Sprite组件
        let bullet:cc.Node = new cc.Node()

        let sprite:cc.Sprite = bullet.addComponent(cc.Sprite)
        sprite.spriteFrame = this.bulletIcon

        bullet.parent = this.node //作为子节点

        bullet.setPosition(cc.v3(0,250,0)) //设置初始位置

        if(this.audio != null)
            cc.audioEngine.play(this.audio,false,1)

        // 加挂一个脚本组件
        let script = bullet.addComponent(BulletScript)
        script.explodeEffect = this.explodeEffect
    }
}
