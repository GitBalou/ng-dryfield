import { Component, Input, OnInit } from '@angular/core';

import { ScoreService } from '../../services/score.service';

@Component({
    selector: 'score-display',
    templateUrl: './score-display.component.html',
    styleUrls: ['./score-display.component.css']
})
export class ScoreDisplayComponent implements OnInit {

    scores: Object[];
    loading: boolean;

    constructor(private scoreService : ScoreService) {}

    ngOnInit() {
        this.loading = true;
        this.scoreService.getStream().subscribe(
            scores => {
                this.scores = scores;
                this.loading = false;
            },
            err => console.log(err)
        );
    }
}