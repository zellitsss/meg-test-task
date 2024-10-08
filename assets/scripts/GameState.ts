import { _decorator, Component, Node } from 'cc';
import { Subject } from 'rxjs';
const { ccclass, property } = _decorator;

@ccclass('GameState')
export class GameState {
    // declare onchanged event manually at this moment, will try to make it as decorators later
    public onCurrencyChanged$ = new Subject();
    private _currency = 0;
    public get currency() {
        return this._currency;
    }
    public set currency(value) {
        this._currency = value;
        this.onCurrencyChanged$.next(this._currency);
    }

    buildings: string[] = [];
    heroes: string[] = [];

    public onSelectedBuildingChanged$ = new Subject();
    private _selectedBuilding = '';
    public get selectedBuilding() {
        return this._selectedBuilding;
    }
    public set selectedBuilding(value) {
        this._selectedBuilding = value;
        this.onSelectedBuildingChanged$.next(this._selectedBuilding);
    }

    constructor() {

    }
}
