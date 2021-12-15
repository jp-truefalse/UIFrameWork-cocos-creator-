import UIManager from "../Manager/UIManager";

/**
 * 面板的页面状态类
 * 面板的挂载类需要继承该类，
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class BasePanel extends cc.Component {
   /**
    * 页面显示时触发
    */
   public OnEnter(): void {
   }
   /**
    * 页面暂停时触发（有其他的页面弹出来了）
    */
   public OnPause(): void {
   }
   /**
    * 页面恢复时触发（其他页面被移除）
    */
   public OnResume(): void {
   }
   /**
    * 页面销毁时触发
    */
   public OnExit(): void {
   }

   /**
    * 隐藏面板
    */
   public closePanel() {
      UIManager.Instance(UIManager).popPanel();
   }

}

