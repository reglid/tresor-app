import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tresor-solution-input',
  templateUrl: './tresor-solution-input.component.html',
  styleUrls: ['./tresor-solution-input.component.scss']
})
export class TresorSolutionInputComponent implements OnInit {
  @Output()
  solutionEntered = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  processInput(solution: string) {
    const trimmedSolution = solution.replace(/ /g, "");
    console.log("Solution: " + trimmedSolution);
    this.solutionEntered.emit(trimmedSolution);

  }
}
