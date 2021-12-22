// 缓动系统-旋转的小新
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    audio:cc.AudioClip

    onLoad () {
        this.node.on('mousedown',this.onClicked,this)
    }

    // start () {}

    // update (dt) {}
    onClicked(){
        if(this.audio != null)
            cc.audioEngine.play(this.audio,false,1)

        let node:cc.Node = cc.find('Canvas/person')
        let pos:cc.Vec2 = node.getPosition()

        // node.setPosition(cc.v3(0,50,0))
        // node.setScale(cc.v3(2,2,0))

        // to里表示最终移动的参数(改成by就是传入改变值) 在0.6s内移动到position的位置
        cc.tween(node)
            .by(0.6,{position:cc.v3(0,50,0),rotation:300},{easing:'elasticOut'})
            .start()
    }
}
