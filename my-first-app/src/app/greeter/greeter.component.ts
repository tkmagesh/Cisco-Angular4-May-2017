import { Component } from '@angular/core';

@Component({
	selector : 'greeter',
	template : `
		<label>Name :</label>
		<input type="text" [(ngModel)]="username"/>
		
		<input type="button" value="Greet" (click)="onGreetClick()" />
		<h3>{{greetMessage}}</h3>
		<input type="button"  value="Clear" (click)="onClearClick()"/>
	`
})
export class GreeterComponent{
	greetMessage : string = 'Welcome to Angular 2/4!!';

	username : string = '';

	onClearClick(){
		console.log('Clear message received');
		this.greetMessage = '';
	}

	onGreetClick(){
		this.greetMessage = `Hi ${this.username}, Have a nice day!`;
		this.username = '';
	}
}