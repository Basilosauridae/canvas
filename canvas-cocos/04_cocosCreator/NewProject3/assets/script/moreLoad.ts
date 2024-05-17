// 动态加载多张图片资源

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    frames:cc.SpriteFrame[] = new Array()
    sprite:cc.Sprite = null //Sprite组件
    index:number = 0 //当前显示第n张图片
    interval:number = 0.1 //定时器的时间间隔

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.sprite = this.node.getComponent(cc.Sprite)

        //动态加载一个目录下所有的资源
        let self = this
        cc.resources.loadDir('fly',cc.SpriteFrame,function(err,assets:[cc.SpriteFrame]){
            self.frames = assets
        })
    }

    start () {
        this.schedule(this.onTimer,this.interval)
    }

    onTimer () {
        if(this.frames.length == 0) return
        this.sprite.spriteFrame = this.frames[this.index]

        this.index ++
        if(this.index>=this.frames.length)
            this.index = 0
    }
    protected onDestroy(): void {
        this.unschedule(this.onTimer)
    }
}
