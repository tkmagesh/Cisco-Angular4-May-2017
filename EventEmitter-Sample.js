class EventEmitter{
	constructor(){
		this.subscribers = [];
	}
	subscribe(listenerFn){
		if (typeof listenerFn !== 'function') return;
		this.subscribers.push(listenerFn);
	}
	emit(data){
		for(var i=0; i < this.subscribers.length; i++){
			var listenerFn = this.subscribers[i];
			listenerFn(data);
		}
	}
}

class Calculator extends EventEmitter{
	constructor(){
		super();
		this.number1 = 0;
		this.number2 = 0;
		this.result = 0;
	}
	
	add(){
		this.result = this.number1 + this.number2;
		this.emit(this.result);
	}
	subtract(){
		this.result = this.number1 - this.number2;
		this.emit(this.result);
	}
		
}

let calc = new Calculator();
calc.number1 = 100;
calc.number2 = 200;
calc.add()