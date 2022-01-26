// 子弹的飞行

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    direction:cc.Vec2 = null //飞行的方向 标准化向量


    start () {
        this.schedule(this.onTimer,0.016)
    }

    onTimer(){
        if(this.node.y > 400){
            this.dismiss()
            return
        }
        let speed:number = 15 //步长
        let dx = speed * this.direction.x
        let dy = speed * this.direction.y

        this.node.x += dx
        this.node.y += dy
    }

    dismiss(){
        this.node.destroy()
    }
}
