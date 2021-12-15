import BasePanel from "../../UIFrameWork/BasePanel/BasePanel";
import UIManager from "../../UIFrameWork/Manager/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShopMgr extends BasePanel {


    // onLoad () {}

    start () {

    }

    // update (dt) {}

    public OnEnter(): void {
        console.log("商店页面显示");
        this.node.getComponent("IsPausePanel").setIsActive(true);
        this.node.getComponent("IsPausePanel").banInterAction(true);
    }

    public OnPause(): void {
        console.log("商店页面暂停");
        this.node.getComponent("IsPausePanel").banInterAction(false);
    }

    public OnResume(): void {
        console.log("商店页面恢复");
        this.node.getComponent("IsPausePanel").banInterAction(true);
    }

    public OnExit(): void {
        console.log("商店页面退出");
        this.node.getComponent("IsPausePanel").setIsActive(false);
        this.node.getComponent("IsPausePanel").banInterAction(false);
    }

    /**
     * 隐藏面板
     */
    public closePanel(){
        UIManager.Instance(UIManager).popPanel();
    }
}
