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
  finalMessage: string;
  allQuestsCompleted: boolean = false;

  constructor() { }

  ngOnInit() {
    this.stages = [
      {
        id: 1,
        quest: "Rechnet: 1234 + 88 - 456 + 10",
        solution: "876"
      }, {
        id: 2,
        quest: "Das nächste Rätsel findet ihr hinter dem Wandteppich. Wie lautet die Lösung?",
        solution: "DBBCBDACCCBA"
      }, {
        id: 3,
        quest: "Aurelius stellt euch eine Aufgabe. Wenn ihr sie löst, verrät er euch die Lösung.",
        solution: "TigiBusi"
      }, {
        id: 4,
        quest: "Das nächste Rätsel findet ihr in der Garage. Wie lautet die Lösung?",
        solution: "9"
      }, {
        id: 5,
        quest: "Das nächste Rätsel findet ihr in Eugenias Zimmer. Wer ist es?",
        solution: "Mathilda"
      }, {
        id: 6,
        quest: "Das nächste Rätsel findet ihr beim Schlagzeug. Schreibt die Rechnung ins Lösungsfeld",
        solution: "2+1=3"
      }, {
        id: 7,
        quest: "Philomena stellt euch eine Aufgabe im Atelier. Wenn ihr alles richtig löst, verrät er euch das Lösungswort.",
        solution: "Hamster"
      }, {
        id: 8,
        quest: "Bald habt ihr es geschafft. Das letzte Rätsel ist in Zohars Zimmer. Viel Glück!",
        solution: "Marco"
      }
    ];

    this.finalMessage = "Geschafft! Ihr könnt das Schloss mit der Kombination '791' öffnen. Viel Spass!";

    this.currentStage = this.stages[this.currentStageIdx];
  }

  nextQuest() {
    this.currentStageIdx++;
    if (this.currentStageIdx < this.stages.length) {
      this.currentStage = this.stages[this.currentStageIdx];
    } else {
      this.allQuestsCompleted = true;
    }
  }

  shortcut($event: MouseEvent) {
    if ($event.ctrlKey || $event.metaKey){
      this.nextQuest();
    }
  }
}
