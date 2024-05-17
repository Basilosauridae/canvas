// gif图片如何在cocos中显示

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

   @property([cc.SpriteFrame])
   frames:cc.SpriteFrame[] = []

   sprite:cc.Sprite = null //Sprite组件
   index:number = 0 // 当前显示第n张图片
   interval:number = 0.1 //定时器的间隔

   protected onLoad(): void {
       this.sprite = this.getComponent(cc.Sprite)
   }

   protected start(): void {
       this.schedule(this.onTimer,this.interval)
   }

   onTimer(){
       if(this.frames.length == 0) return

       this.sprite.spriteFrame = this.frames[this.index]
        
       //下一帧
       this.index++
       if(this.index >= this.frames.length)
            this.index = 0
   }

   protected onDestroy(): void {
       this.unschedule(this.onTimer)
   }
}