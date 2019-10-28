import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tresor-quest-display',
  templateUrl: './tresor-quest-display.component.html',
  styleUrls: ['./tresor-quest-display.component.scss']
})
export class TresorQuestDisplayComponent implements OnInit {
  @Input()
  quest: string;

  constructor() { }

  ngOnInit() {
  }

}
