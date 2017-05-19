import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <nav>
            <a routerLink="/game">Jouer</a>
            <a routerLink="/score">Scores</a>
        </nav>
        <router-outlet></router-outlet>`
})
export class AppComponent {}