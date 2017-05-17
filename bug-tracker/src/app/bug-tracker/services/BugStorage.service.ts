import { BugOperationService } from './BugOperartion.service';
import { IBug } from '../models/IBug';
import { Injectable } from '@angular/core';

@Injectable()
export class BugStorageService{
	private storage : Storage = window.localStorage;
	private currentBugId :number = 0;

	constructor(private bugOperations : BugOperationService){

	}
	getAll(){
		let result = [];
		for(let index = 0; index < this.storage.length; index ++){
			let data = this.storage.getItem(this.storage.key(index));
			let bug = JSON.parse(data);
			this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
			result.push(bug);
		}
		return result;
	}
	addNew(bugName : string) : IBug {
		let newBug = this.bugOperations.createNew(++this.currentBugId, bugName);
		this.save(newBug);
		return newBug;
	}
	private save(bug : IBug){
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}
	toggle(bug : IBug) : IBug {
		let toggledBug = this.bugOperations.toggle(bug);
		this.save(toggledBug);
		return toggledBug;
	}
	remove(bug : IBug){
		this.storage.removeItem(bug.id.toString());
	}
}