
import { IBug } from '../models/IBug';

export class BugOperationService{
	createNew(id : number, bugName : string) : IBug {
		var newBug : IBug = {
			id : id,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		return newBug;
	}
	toggle(bug : IBug) : IBug {
		return {
			id : bug.id,
			name : bug.name,
			isClosed : !bug.isClosed,
			createdAt : bug.createdAt
		}
	}
}