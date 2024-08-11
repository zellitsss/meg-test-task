import { _decorator, Component, instantiate, Prefab, tween, UITransform, Widget, Node } from 'cc';
import { GameManagerComponent } from './GameManagerComponent';
import { from, of } from 'rxjs';
const { ccclass, property } = _decorator;

@ccclass('TowerPanelComponent')
export class TowerPanelComponent extends Component {

    @property(Prefab)
    heroCardPrefab: Prefab = null;

    @property(Node)
    heroListNode: Node = null;
        
    start() {
        this.setupHeroList();

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

    private setupHeroList() {
        this.heroListNode.removeAllChildren();
        // even those data is static, but just in case we would change it to dynamic data
        from(GameManagerComponent.instance.staticData.heroes).subscribe(this.setupHeroCard.bind(this));
    }

    private setupHeroCard(heroData: any)
    {
        let heroCard: Node = instantiate(this.heroCardPrefab);
        this.heroListNode.addChild(heroCard);
    }
}


