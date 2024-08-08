import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManagerComponent')
export class GameManagerComponent extends Component {

    @property(Node)
    towerBuilding: Node = null;

    @property(Node)
    signPostBtn: Node = null;

    private static _instance: GameManagerComponent;
    public static get instance(): GameManagerComponent {
        return GameManagerComponent._instance;
    }

    protected onLoad(): void {
        if (GameManagerComponent._instance == null) {
            GameManagerComponent._instance = this;
        }
        else {
            this.node.destroy();
        }
    }
}
