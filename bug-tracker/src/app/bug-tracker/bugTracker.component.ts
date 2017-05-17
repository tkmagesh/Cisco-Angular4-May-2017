import { Component } from '@angular/core';
import { IBug } from './models/IBug';
//import { BugOperationService } from './services/BugOperartion.service';
import { BugStorageService } from './services/BugStorage.service';


@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Array<IBug> = [];

	constructor(private bugStorage : BugStorageService){
		this.bugs = this.bugStorage.getAll();
	}

	
	onNewBug(newBugName : string){
		var newBug = this.bugStorage.addNew(newBugName);
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bug : IBug){
		this.bugs = this.bugs.map(bugInList => 
			bugInList === bug ? this.bugStorage.toggle(bug) : bugInList);
	}

	onRemoveClosedClick(){
		for(let index = this.bugs.length-1; index >= 0; index--){
			if (this.bugs[index].isClosed){
				this.bugStorage.remove(this.bugs[index]);
				this.bugs.splice(index, 1);
			}
		}
	}

}