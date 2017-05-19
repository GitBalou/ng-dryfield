import { Injectable } from '@angular/core';

import { Field } from '../models/Field';
import { Player } from '../models/Player';
import { Market } from '../models/Market';

@Injectable() 
export class GameService{

    // interval
    private _interval: any;
    
    // water consumption
    _waterConsumption: number;
    _gameDuration: number;
    
    // model
    private _fields: Field[];
    private _player : Player;
    private _market: Market;

    constructor(){
        this._player = new Player();
        
        this._fields= [];
        this._fields[0] = new Field();
        this._fields[1] = new Field();
        this._fields[2] = new Field();

        this._market = new Market(1, 20);

        this._waterConsumption = 1;
        this._gameDuration = 0;

        // bind method to this
        this.runGame = this.runGame.bind(this);
        this.calculateWaterConsumption = this.calculateWaterConsumption.bind(this);
    }

    getFields() {
        return this._fields;
    }

    getPlayer(){
        return this._player;
    }

    startGame() {
        if( this._interval) {
            return;
        }

        this._interval = setInterval( this.runGame, 1000);
    }

    stopGame() {
        // clear interval
        clearInterval( this._interval);
        this._interval = null;    
    }

    runGame(){
        
        // game duration
        this._gameDuration ++;

        // calcalulate new water consumption
        this.calculateWaterConsumption();

        //get currencies
        //this.getCurrencies();

        //get transactions
        //this.getTransaction();
        
        // has player lost ?    
        var totalFieldsWater = this._fields.reduce( function(acc, el) {
            return acc + el.getWaterReserve();
        }, 0);

        if( totalFieldsWater == 0 ) {
            this.gameLost();
            return;
        }

        // loop all fields
        this._fields.forEach(function(element) {

            // field is rdy to harvest or dead
            if( element.getHarvestState() == 'ok' || element.getHarvestState() == 'dead') {
                return;
            }

            // increase days by 1
            element.incrementDayCount();

            // fields water reserve
            var water = element.getWaterReserve();
            
            // not enough water to mature => harvest is lost
            if( water < this._waterConsumption) {
                element.setWaterReserve(0);
                element.setHarvestState('dead');
                return;
            }
            
            // harvest grows
            element.setWaterReserve( water - this._waterConsumption);
            
            // is harvest rdy ?
            if( element.getDayCount() == 20) {
                element.setHarvestState('ok');
            }

        }, this);
    }

    irrigate(id){    
        
        // get water 
        var water = this._fields[id].getWaterReserve();
        
        // enough water in player reserve ?
        var playerWater = this._player.getWater();
        if( 1 > playerWater ) {
            return;
        }

        // take water from player
        this._player.setWater(playerWater - 1);

        // reinit fields if harvest is already dead
        if( this._fields[id].getHarvestState() == 'dead') {
            this._fields[id].setWaterReserve(water + 1);    
            this._fields[id].setHarvestState('notRdy');    
            this._fields[id].setDayCount(0);    
        }
        // add water to field
        else {
            this._fields[id].setWaterReserve(water + 1);
        }
    }

    // harvest field
    harvest(id) {

        // harvest field
        if( this._fields[id].getHarvestState() == 'ok') {
            
            // player scores
            this._player.setNbHarvest( this._player.getNbHarvest() + 1);

            // player money
            this._player.setMoney( this._player.getMoney() + this._market.getHarvestPrice());

            // reset field
            this._fields[id].setDayCount(0);

            // reset harvest state
            this._fields[id].setHarvestState('notRdy');
        }
    }

    // buy water
    buyWater(data){

        // quantity
        var quantity = data.quantity;

        // invalid quantity
        if( isNaN(quantity) || quantity < 0) {
            alert('Bien tenté Ronan...');
            return;
        }

        // cost
        var cost = quantity * this._market.getWaterPrice();

        // enough money ?
        if( this._player.getMoney() < cost) {
            alert('Pas assez d\'argent!!');
            return;
        }

        // set data
        this._player.setMoney( this._player.getMoney() - cost);
        this._player.setWater( this._player.getWater() + quantity);
    }

    // water consumption
    calculateWaterConsumption(){
        this._waterConsumption = 1 + this._gameDuration * 0.02; 
        this._waterConsumption = Math.min( this._waterConsumption,2);
    }

    // game is lost
    gameLost() {
        
        // stop game
        this.stopGame();

        // reset game
        //this.reset();

        // lock game
        // this.lockGame();

        // show score form
        // this.showForm();   
    }
}
