import BasePanel from "../../UIFrameWork/BasePanel/BasePanel";
import UIAnimationMgr from "../../UIFrameWork/Manager/UIAnimationMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TaskMgr extends BasePanel {


    // onLoad () {}

    start() {

    }

    // update (dt) {}

    public OnEnter(): void {
        console.log("任务页面显示");
        this.node.getComponent("IsPausePanel").banInterAction(true);
        UIAnimationMgr.Instance(UIAnimationMgr).opacityAnimation(this.node,true);
    }

    public OnPause(): void {
        console.log("任务页面暂停");
        this.node.getComponent("IsPausePanel").banInterAction(false);
    }

    public OnResume(): void {
        console.log("任务页面恢复");
        this.node.getComponent("IsPausePanel").banInterAction(true);
    }

    public OnExit(): void {
        console.log("任务页面退出");
        this.node.getComponent("IsPausePanel").banInterAction(false);
        UIAnimationMgr.Instance(UIAnimationMgr).posAnimation(this.node,new cc.Vec3(this.node.x-1300,this.node.y,0),this.node.position,0.2,false);
    }

    /**
     * 隐藏面板
     */
    public closePanel(): void {
        UIManager.Instance(UIManager).popPanel();
    }

}
