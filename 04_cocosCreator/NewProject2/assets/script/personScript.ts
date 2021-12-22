
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    @property
    faceLeft:boolean = true //会在cocos中展示勾选

    @property(cc.SpriteFrame)
    face1:cc.SpriteFrame = null

    @property(cc.SpriteFrame)
    face2:cc.SpriteFrame = null

    @property(cc.AudioClip)
    audio:cc.AudioClip

    onLoad () {
        cc.systemEvent.on('keydown',this.onKeyDown,this)
    }

    // start () {}

    // update (dt) {}

    onKeyDown(evt:cc.Event.EventKeyboard){
        if(evt.keyCode == cc.macro.KEY.left){
            this.moveLeft()
        }else if
            (evt.keyCode == cc.macro.KEY.right)
        {
            this.moveRight()
        }
    }

    moveLeft(){
        if(!this.faceLeft){
            this.faceLeft = true
            this.changeFace()
        }
        this.move()
    }
    moveRight(){
        if(this.faceLeft){
            this.faceLeft = false
            this.changeFace()
        }
        this.move()
    }

    // 改变脸的朝向
    move(){
        if(this.faceLeft){
            this.node.x -= 10
        }else{
            this.node.x += 10
        }
        if(this.audio != null){
            cc.audioEngine.play(this.audio,false,1)
        }
    }
    changeFace(){
        let sprite:cc.Sprite = this.node.getComponent(cc.Sprite)
        if(this.faceLeft)
            sprite.spriteFrame = this.face1
        else
            sprite.spriteFrame = this.face2
    }

}
