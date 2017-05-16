import { Pipe, PipeTransform } from '@angular/core';

interface IComparer{
	(item1 : any, item2 : any) : number
}

function getComparer(attrName) : IComparer {
	return function compare(item1 : any , item2 : any) : number {
		if (item1[attrName] < item2[attrName]) return -1;
		if (item1[attrName] > item2[attrName]) return 1;
		return 0;
	};
}

function getDescendingComparer(comparer : IComparer) : IComparer {
	return function (item1 : any, item2 : any) : number{
		return comparer(item1, item2) * -1;
	}
}

@Pipe({
	name : 'sort'
})
export class SortPipe implements PipeTransform{
	transform(list : Array<any>, attrName : string = 'name', isDescending:boolean = false) : Array<any> {
		let comparer = getComparer(attrName);
		if (isDescending){
			comparer = getDescendingComparer(comparer);
		}
		for(let i =0; i < list.length-1; i++)
			for(let j = i + 1; j < list.length ; j++)
				if (comparer(list[i], list[j]) > 0)
					[list[i],list[j]] = [list[j], list[i]];
		return list;
	}
}