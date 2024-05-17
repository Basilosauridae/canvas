// 动态加载图片资源

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    onLoad () {
        this.node.on('touchstart',this.onClicked,this)
    }

    onClicked(){
        let self = this //闭包语法

        // 'icon/love'待加载的资源必须放在resources目录下，路径不能带后缀名
        cc.resources.load('icon/love',cc.SpriteFrame,function(err,assets){
            if(err) { cc.log(err);return}
            /* cc.log(this.node,'this')
            cc.log(self.node,'self') */

            // 为什么用self不用this 因为回调中无法直接调用this 所以先定义
            self.node.getComponent(cc.Sprite).spriteFrame = <cc.SpriteFrame> assets // <cc.SpriteFrame>是类型转化
        })

    }
}
