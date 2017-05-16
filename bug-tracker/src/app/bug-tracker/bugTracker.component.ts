import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperationService } from './services/BugOperartion.service';


@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Array<IBug> = [];

	constructor(private _bugOperations : BugOperationService){
		this.populateTestData();
	}

	private populateTestData(){
		this.bugs.push(this._bugOperations.createNew('Server communication error'));
		this.bugs.push(this._bugOperations.createNew('User actions not recognized'));
		this.bugs.push(this._bugOperations.createNew('Application not responding'));
		this.bugs.push(this._bugOperations.createNew('Data integrity error'));
	}

	onAddNewClick(newBugName : string){
		var newBug = this._bugOperations.createNew(newBugName);
		this.bugs.push(newBug);
	}

	onBugClick(bug : IBug){
		this._bugOperations.toggle(bug);
	}

	onRemoveClosedClick(){
		for(let index = this.bugs.length-1; index >= 0; index--){
			if (this.bugs[index].isClosed){
				this.bugs.splice(index, 1);
			}
		}
	}

	getClosedCount(){
		let closedCount = 0;
		for(let index = 0; index < this.bugs.length; index++){
			if (this.bugs[index].isClosed)
				++closedCount;
		}
		return closedCount;
	}
}