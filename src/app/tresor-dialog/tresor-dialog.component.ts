import { Component, OnInit } from '@angular/core';
import {Stage} from "../Stage";

@Component({
  selector: 'app-tresor-dialog',
  templateUrl: './tresor-dialog.component.html',
  styleUrls: ['./tresor-dialog.component.scss']
})
export class TresorDialogComponent implements OnInit {
  currentStage: Stage;
  currentStageIdx: number = 0;

  stages: Stage[];


  constructor() { }

  ngOnInit() {
    this.stages = [
      {
        id: 1,
        quest: "Wie lautet die Lösung des ersten Rätsels?",
        solution: "1234"
      }, {
        id: 2,
        quest: "Das nächste Rätsel ist im Garten. Wie lautet die Lösung?",
        solution: "5678"
      }, {
        id: 3,
        quest: "Was ergibt 1000 + 200 + 30 + 4?",
        solution: "5678"
      }
    ];

    this.currentStage = this.stages[this.currentStageIdx];
  }

  nextQuest() {
    this.currentStageIdx++;
    this.currentStage = this.stages[this.currentStageIdx];
  }
}
