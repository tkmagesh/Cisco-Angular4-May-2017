import { IBug } from '../models/IBug';

export class BugOperationService{
	createNew(bugName : string) : IBug {
		var newBug : IBug = {
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		return newBug;
	}
	toggle(bug : IBug) : IBug {
		return {
			name : bug.name,
			isClosed : !bug.isClosed,
			createdAt : bug.createdAt
		}
	}
}