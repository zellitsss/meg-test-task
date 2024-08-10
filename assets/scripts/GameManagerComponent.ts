import { _decorator, Component, JsonAsset, Node } from 'cc';
import { GameState } from './GameState';
import { interval } from 'rxjs';
import { StaticData } from './StaticData';
const { ccclass, property } = _decorator;

@ccclass('GameManagerComponent')
export class GameManagerComponent extends Component {

    @property(JsonAsset)
    initialState: JsonAsset = null;

    @property(JsonAsset)
    buildingData: JsonAsset = null;

    @property(JsonAsset)
    heroesData: JsonAsset = null;

    private _gameState: GameState = new GameState();
    public get gameState(): GameState {
        return this._gameState;
    }
    private set gameState(value: GameState) {
        this._gameState = value;
    }

    private _staticData: StaticData = new StaticData();
    public get staticData(): StaticData {
        return this._staticData;
    }
    private set staticData(value: StaticData) {
        this._staticData = value;
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
        this.loadStaticData();
        this.initializeState();
    }

    private initializeState() {
        Object.assign(this.gameState, this.initialState.json.state);
    }

    private loadStaticData() {
        Object.assign(this.staticData, this.buildingData.json);
        Object.assign(this.staticData, this.heroesData.json);
    }
}
