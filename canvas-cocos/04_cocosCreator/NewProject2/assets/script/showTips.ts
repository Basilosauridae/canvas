// 计时器API-开始游戏文字

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    label: cc.Label = null;
    text: string = null;
    index:number = 0
    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.label = this.node.getComponent(cc.Label) //getComponent是获取cocos右边栏的组件
        this.text = this.label.string//
        this.label.string = ''//清空文本 从头显示

        this.schedule(this.onTimer,0.1)//每0.1秒调用onTimer函数一次
    }
    
    // start () {}
    
    onTimer(){
        
        this.index ++
        
        let str:string = this.text.substr(0,this.index)
        this.label.string = str
        // console.log(str,'str')//字符串下标逐一增加 直到大于标题的长度停止

        if(this.index >= this.text.length)
            this.unschedule(this.onTimer)

    }
}
