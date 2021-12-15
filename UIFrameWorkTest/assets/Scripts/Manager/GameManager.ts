/**
 * 测试类
 */

import UIManager from "../../UIFrameWork/Manager/UIManager";
import { UIPanleType } from "../../UIFrameWork/UIPanelType/UIPanelType";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {

    start () {
        UIManager.Instance(UIManager).pushPanel(UIPanleType.MainMenue);
    }

}
