/**
 * 主界面控制类
 */
import BasePanel from "../../UIFrameWork/BasePanel/BasePanel";
import UIManager from "../../UIFrameWork/Manager/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BGMgr extends BasePanel {

    // onLoad () {}

    start () {

    }

    public OnEnter(): void {
        console.log("背景页面显示");
        this.node.getComponent("IsPausePanel").setIsActive(true);
        this.node.getComponent("IsPausePanel").banInterAction(true);
    }

    public OnPause(): void {
        console.log("背景页面暂停");
        this.node.getComponent("IsPausePanel").banInterAction(false);
    }

    public OnResume(): void {
        console.log("背景页面恢复");
        this.node.getComponent("IsPausePanel").banInterAction(true);
    }

    public OnExit(): void {
        console.log("背景页面退出");
        // this.node.getComponent("IsPausePanel").setActive(false);
        // this.node.getComponent("IsPausePanel").setBlocksRayCast(false);
    }
    // update (dt) {}

    /**
     * 显示面板
     * @param panelType 面板类型
     */
    public showPanel(event,customData){
        UIManager.Instance(UIManager).pushPanel(customData);
    }
    
        /**
     * 隐藏面板
     */
    public closePanel(): void {
       super.closePanel();
    }


}
