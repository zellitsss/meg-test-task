import { _decorator, Component, JsonAsset, Node } from 'cc';
import { GameState } from './GameState';
import { interval } from 'rxjs';
const { ccclass, property } = _decorator;

@ccclass('GameManagerComponent')
export class GameManagerComponent extends Component {

    @property(Node)
    towerBuilding: Node = null;

    @property(Node)
    signPostBtn: Node = null;

    @property(JsonAsset)
    initialState: JsonAsset = null;

    private _gameState: GameState = new GameState();
    public get gameState(): GameState {
        return this._gameState;
    }
    private set gameState(value: GameState) {
        this._gameState = value;
    }

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

    protected start(): void {
        this.initializeState();
    }

    protected initializeState() {
        Object.assign(this.gameState, this.initialState.json.state);
    }
}
