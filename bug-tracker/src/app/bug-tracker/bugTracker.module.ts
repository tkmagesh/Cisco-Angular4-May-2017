import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { UtilsModule } from '../utils/utils.module';

import { BugTrackerComponent } from './bugTracker.component';
import { BugOperationService } from './services/BugOperartion.service';
import { ClosedCountPipe } from './pipes/closedCount.pipe';
import { BugStatsComponent } from './bug-stats/bug-stats.component';
import { BugEditComponent } from './bug-edit/bug-edit.component';
import { BugStorageService } from './services/BugStorage.service';
import { BugServerService } from './services/BugServer.service';

@NgModule({
	declarations : [
		BugTrackerComponent,
		ClosedCountPipe,
		BugStatsComponent,
		BugEditComponent
	],
	providers : [
		BugOperationService,
		BugStorageService,
		BugServerService
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