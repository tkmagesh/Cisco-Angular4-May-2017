import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { BugOperationService } from './BugOperartion.service';

import { IBug } from '../models/IBug';

@Injectable()
export class BugServerService{
	private serviceUrl = 'http://localhost:3000/bugs/'
	constructor(private http : Http, private bugOperations : BugOperationService){

	}
	getAll() : Observable<Array<IBug>> {
		return this.http
			.get(this.serviceUrl)
			.map(response => response.json());
	}

	addNew(bugName : string) : Observable<IBug>{
		var newBugData = this.bugOperations.createNew(0, bugName);
		return this.http
			.post(this.serviceUrl, newBugData)
			.map(response => response.json());
	}
}