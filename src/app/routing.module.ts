import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameDisplayComponent } from './components/game-display/game-display.component';
import { ScoreDisplayComponent } from './components/score-display/score-display.component';

const routes: Routes = [
    { path: '', redirectTo: '/game', pathMatch: 'full' },
    { path: 'game', component: GameDisplayComponent },
    { path: 'score', component : ScoreDisplayComponent }
];

@NgModule ({
    imports: [ RouterModule.forRoot( routes)],
    exports: [ RouterModule ],
})
export class RoutingModule {}