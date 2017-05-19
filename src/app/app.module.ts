import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';

import { GameDisplayComponent } from './components/game-display/game-display.component';
import { ScoreDisplayComponent } from './components/score-display/score-display.component';
import { BuyWaterComponent } from './components/buy-water/buy-water.component';
import { FieldComponent } from './components/field/field.component';
import { PlayerComponent } from './components/player/player.component';

import { ScoreService } from './services/score.service';
import { GameService } from './services/game.service';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        RoutingModule,
    ],
    declarations: [
        AppComponent,
        GameDisplayComponent,
        ScoreDisplayComponent,
        BuyWaterComponent,
        FieldComponent,
        PlayerComponent,
    ],
    providers: [ ScoreService, GameService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }