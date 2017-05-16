import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { UtilsModule } from '../utils/utils.module';

import { BugTrackerComponent } from './bugTracker.component';
import { BugOperationService } from './services/BugOperartion.service';
import { ClosedCountPipe } from './pipes/closedCount.pipe';
import { BugStatsComponent } from './bug-stats/bug-stats.component';
import { BugEditComponent } from './bug-edit/bug-edit.component';

@NgModule({
	declarations : [
		BugTrackerComponent,
		ClosedCountPipe,
		BugStatsComponent,
		BugEditComponent
	],
	providers : [
		BugOperationService
	],
	imports : [
		UtilsModule,
		FormsModule,
		CommonModule
	],
	exports : [
		BugTrackerComponent
	]
})
export class BugTrackerModule{

}