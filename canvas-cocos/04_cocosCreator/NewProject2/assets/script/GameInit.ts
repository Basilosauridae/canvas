// 游戏的全局设置 一般写在canvas组件中 onLoad方法 设置全局游戏帧率

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null

    @property
    text: string = 'hello'

    @property(cc.AudioClip) //不写这个cocos组件中不显示
    audio:cc.AudioClip


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.game.setFrameRate(30)
        if(this.audio != null)
            cc.audioEngine.play(this.audio,false,1)
    }
    
}
