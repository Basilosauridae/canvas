// 缓动系统-弹力篮球
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    audio:cc.AudioClip

    protected onLoad(): void {
        this.node.on('mousedown',this.onClicked,this)
    }

    start () {

    }

    onClicked(){
        if(this.audio != null)
            cc.audioEngine.play(this.audio,false,1)

        let h:number = 300
        cc.tween(this.node)
            .by(0.5,{position:cc.v3(0,-h,0)},{easing:'quardIn'}) //加速下降
            .by(0.2,{position:cc.v3(0,h/6,0)},{easing:'quardOut'})//反弹 减速 上升
            .by(0.2,{position:cc.v3(0,-h/6,0)},{easing:'quardIn'})//再下降
            .start()
    }

}
