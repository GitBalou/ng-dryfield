import { Component } from '@angular/core';

import { Field } from '../../models/Field';
import { Player } from '../../models/Player';
import { GameService} from '../../services/game.service';

@Component({
    selector: 'game-display',
    templateUrl: './game-display.component.html',
    styleUrls: ['./game-display.component.css'],
})
export class GameDisplayComponent {
    
    player: Player;
    fields: Field[];
    game: GameService;

    constructor(game: GameService) {
        this.game = game;
        this.player = this.game.getPlayer();
        this.fields = this.game.getFields();
    }

    start() {
        this.game.startGame();
    }

    buyWater(quantity: number) {
        this.player.setWater( this.player.getWater() + quantity);
        this.player.setMoney( this.player.getMoney() - quantity * 1);
    }

    irrigateField(id){
        this.game.irrigate(id);
    }

    harvestField(id){
        this.game.harvest(id);
    }
}

