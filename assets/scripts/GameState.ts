import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameState')
export class GameState {
    currency = 0;
    buildings: string[] = [];
    heroes: string[] = [];
}
