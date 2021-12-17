// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property
    towardsLeft:boolean = true

    @property
    step:number = 20

    @property(cc.AudioClip)
    audio:cc.AudioClip = null
    // LIFE-CYCLE CALLBACKS:

    // this 当前组件
    // this.node 当前节点
    // 注意：this.moveLeft传入方法名 不要加括号

    onLoad () {
        // 组件初始化时执行
        this.node.on('mousedown',this.move,this)
    }

    start () {
        // 第一次激活前执行
        let str:string = 'hello'
        cc.log('组件personscript start' )
    }

    move(evt:cc.Event.EventMouse){
        if(this.towardsLeft){
            this.node.x -= this.step //向左走
        }else{
            this.node.x += this.step
        }
        // 播放脚步声
        if(this.audio != null){
            cc.audioEngine.play(this.audio,false,1)
        }
    }


   /*  update (dt) {
        // 每帧执行
    } */
}
