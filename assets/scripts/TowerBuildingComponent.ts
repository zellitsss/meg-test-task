import { _decorator, Component, Node } from 'cc';
import { fromEvent } from 'rxjs';
import { GameManagerComponent } from './GameManagerComponent';
const { ccclass, property } = _decorator;

@ccclass('TowerBuildingComponent')
export class TowerBuildingComponent extends Component {
    start() {
        fromEvent(this.node, Node.EventType.TOUCH_END).subscribe(this.onTowerBuildingTouched.bind(this));
    }

    private onTowerBuildingTouched(event: any)
    {
        GameManagerComponent.instance.gameState.selectedBuilding = GameManagerComponent.instance.gameState.selectedBuilding == "hire_tower" ? "" : "hire_tower";
    }
}


