import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector : 'bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" #txtBugName>
			<input type="button" value="Add New" (click)="onAddNewClick(txtBugName.value)">
		</section>
	`
})
export class BugEditComponent{

	@Output()
	newBug : EventEmitter<string> = new EventEmitter<string>();

	onAddNewClick(newBugName : string){
		this.newBug.emit(newBugName);
	}
}