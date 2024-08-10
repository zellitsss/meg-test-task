import { _decorator, Component, tween, UITransform, Widget } from 'cc';
import { GameManagerComponent } from './GameManagerComponent';
const { ccclass, property } = _decorator;

@ccclass('TowerPanelComponent')
export class TowerPanelComponent extends Component {
    start() {
        GameManagerComponent.instance.gameState.onSelectedBuildingChanged$
            .subscribe(this.onSelectedBuildingChanged.bind(this));
    }

    private onSelectedBuildingChanged(selectedBuilding: any) {
        let widget = this.node.getComponent(Widget);
        let desiredBottomPadding = selectedBuilding == "hire_tower" ? -this.node.getComponent(UITransform).contentSize.y : 0;
        tween()
            .target(widget)
            .to(1.0, { bottom: desiredBottomPadding })
            .start();
    }
}


