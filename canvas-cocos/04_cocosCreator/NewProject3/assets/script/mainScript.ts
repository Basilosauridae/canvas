
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    audio:cc.AudioClip

    onLoad () {
        if(this.audio != null)
            cc.audioEngine.play(this.audio,false,1)
    }
}
