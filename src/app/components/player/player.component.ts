import { Component, Input } from '@angular/core';

@Component({
    selector: 'player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css'],
})
export class PlayerComponent {

    @Input() name : string;
    @Input() nbHarvest : number;
    @Input() money : number;
    @Input() water : number;
    
}