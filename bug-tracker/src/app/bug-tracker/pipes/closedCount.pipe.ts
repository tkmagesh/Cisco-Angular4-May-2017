import { Pipe, PipeTransform } from '@angular/core';
import { IBug } from '../models/IBug';

@Pipe({
	name : 'closedCount'
})
export class ClosedCountPipe implements PipeTransform{
	transform(bugs : Array<IBug>) : number{
		/*let closedCount = 0;
		for(let index = 0; index < bugs.length; index++){
			if (bugs[index].isClosed)
				++closedCount;
		}
		return closedCount;*/

		return bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}