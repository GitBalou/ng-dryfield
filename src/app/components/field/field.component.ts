import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { CONF } from '../../../conf/conf';

@Component({
    selector: 'field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css'],
})
export class FieldComponent{

    @Input() id: number;
    @Input() dayCount: number;
    @Input() harvestState: string;
    @Input() waterReserve: number;
    @Output() onIrrigate = new EventEmitter<number>();
    @Output() onHarvest = new EventEmitter<number>();
    maxDayCount:number = CONF.game.daysToHarvest;

    irrigate(){
        this.onIrrigate.emit( this.id);
    }

    harvest(){
        this.onHarvest.emit(this.id);
    }
}