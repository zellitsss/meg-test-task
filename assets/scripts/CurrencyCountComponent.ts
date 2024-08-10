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
        if (this.label != null && GameManagerComponent.instance != null)
        {
            this.label.string = GameManagerComponent.instance.gameState.currency.toString();
        }
    }
}


