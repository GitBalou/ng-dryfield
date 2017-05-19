import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'buy-water',
    templateUrl: './buy-water.component.html',
    styleUrls: ['./buy-water.component.css'],
})
export class BuyWaterComponent {
    @Input() max : number;
    @Input() water : number;
    @Output() onBuy = new EventEmitter<number>();
    validationMsg: string;

    constructor() {
        this.validationMsg = "";
    }

    onSubmit() {

        // reset msg
        this.validationMsg = "";

        // invalid values
        if( this.water < 0 || isNaN(this.water) || this.water > this.max) {
            this.validationMsg = "Mauvaise valeur";
            return;
        }
        
        // emit event
        this.onBuy.emit(this.water);
    }
}