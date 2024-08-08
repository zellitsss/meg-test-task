import { _decorator, Component, EventTouch, Node, tween, UITransform, Vec3, Widget } from 'cc';
import { GameManagerComponent } from './GameManagerComponent';
import { fromEvent } from 'rxjs';
const { ccclass, property } = _decorator;

@ccclass('TowerPanelComponent')
export class TowerPanelComponent extends Component {
    start() {
        if (GameManagerComponent.instance != null) {
            fromEvent(GameManagerComponent.instance.towerBuilding, Node.EventType.TOUCH_END).subscribe(this.onTowerBuildingTouched.bind(this));
        }
    }

    private onTowerBuildingTouched(event: any) {
        let widget = this.node.getComponent(Widget);
        let desiredBottomPadding = widget.bottom == 0 ? -this.node.getComponent(UITransform).contentSize.y : 0;
        tween()
            .target(widget)
            .to(1.0, { bottom: desiredBottomPadding })
            .start();
    }
}


