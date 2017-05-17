import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
//import { BugOperationService } from './services/BugOperartion.service';
import { BugStorageService } from './services/BugStorage.service';

//import { Http } from '@angular/http';
//import 'rxjs/Rx';

import { BugServerService } from './services/BugServer.service';

declare var fetch;

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : Array<IBug> = [];
	sortBugBy : string = '';
	sortBugDescending : boolean = false;
	
	ngOnInit(){
		/*fetch('http://localhost:3000/bugs')
			.then(function(response){ return response.json();})
			.then((bugs) => this.bugs = bugs);*/

		this.bugService
			.getAll()
			.subscribe(bugs  => this.bugs = bugs);
	}

	constructor(private bugStorage : BugStorageService, private bugService : BugServerService){
		//this.bugs = this.bugStorage.getAll();
		/*http
			.get('http://localhost:3000/bugs')
			.map(response  => response.json())
			.subscribe(bugs => this.bugs= bugs);*/
	}

	
	onNewBug(newBugName : string){
		//var newBug = this.bugStorage.addNew(newBugName);
		this.bugService
			.addNew(newBugName)
			.subscribe(newBug => this.bugs = [...this.bugs, newBug]);
		
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