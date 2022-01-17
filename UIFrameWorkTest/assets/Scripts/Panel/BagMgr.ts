import BasePanel from "../../UIFrameWork/BasePanel/BasePanel";
import UIManager from "../../UIFrameWork/Manager/UIManager";

/**
 * 背包控制类
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class BagMgr extends BasePanel {

    // onLoad () {}

    start() {

    }

    public OnEnter(): void {
        console.log("背包界面显示");
        this.node.getComponent("IsPausePanel").setIsActive(true);
        this.node.getComponent("IsPausePanel").banInterAction(true);
    }

    public OnPause(): void {
        console.log("背包界面暂停");
        this.node.getComponent("IsPausePanel").banInterAction(false);
    }

    public OnResume(): void {
        console.log("背包界面恢复");
        this.node.getComponent("IsPausePanel").banInterAction(true);
    }

    public OnExit(): void {
        console.log("背包界面退出");
        this.node.getComponent("IsPausePanel").setIsActive(false);
        this.node.getComponent("IsPausePanel").banInterAction(false);
    }

    /**
     * 隐藏面板
     */
    public closePanel(): void {
       super.closePanel();
    }

    // update (dt) {}
}
