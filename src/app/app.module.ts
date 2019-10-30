import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import { TresorDialogComponent } from './tresor-dialog/tresor-dialog.component';
import { TresorQuestDisplayComponent } from './tresor-quest-display/tresor-quest-display.component';
import { TresorSolutionInputComponent } from './tresor-solution-input/tresor-solution-input.component';
import { TresorSolutionComponent } from './tresor-solution/tresor-solution.component';

@NgModule({
  declarations: [
    AppComponent,
    TresorDialogComponent,
    TresorQuestDisplayComponent,
    TresorSolutionInputComponent,
    TresorSolutionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
