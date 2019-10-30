import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tresor-solution',
  templateUrl: './tresor-solution.component.html',
  styleUrls: ['./tresor-solution.component.scss']
})
export class TresorSolutionComponent implements OnInit {
  @Output()
  solutionCorrectEntered = new EventEmitter();

  @Input()
  expectedSolution: string;

  solutionCorrect: boolean = null;

  constructor() { }

  ngOnInit() {
  }

  checkSolution($solution: string) {
    console.log("Check solution: " + $solution);
    this.solutionCorrect = this.expectedSolution.toLowerCase() === $solution.toLowerCase();
  }

  nextQuest() {
    this.solutionCorrect = null;
    this.solutionCorrectEntered.emit()
  }
}
