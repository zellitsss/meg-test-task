import { _decorator, Component, Label, Node } from 'cc';
import { GameManagerComponent } from './GameManagerComponent';
const { ccclass, property } = _decorator;

@ccclass('CurrencyCountComponent')
export class CurrencyCountComponent extends Component {

    private label: Label = null;

    protected onLoad(): void {
        this.label = this.getComponentInChildren(Label);
    }

    protected start(): void {
        if (GameManagerComponent.instance != null) {
            // Need to fetch the original value first
            this.onCurrencyChanged(GameManagerComponent.instance.gameState.currency);
            GameManagerComponent.instance.gameState.onCurrencyChanged$.subscribe(this.onCurrencyChanged.bind(this));
        }
    }

    private onCurrencyChanged(value: any): void {
        if (this.label != null) {

            this.label.string = value.toString();
        }
    }
}


