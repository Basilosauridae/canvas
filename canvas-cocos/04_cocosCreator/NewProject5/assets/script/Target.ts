// 靶标的运动

const {ccclass} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    isLeft:boolean = true

    updated() {
        let dx:number = 3
        if(this.isLeft){
            dx = 0 - dx
        }
        this.node.x += dx
        if(this.isLeft && this.node.x < -200)
            this.isLeft = false
        if(!this.isLeft && this.node.x > 200)
            this.isLeft = true
    }
}
