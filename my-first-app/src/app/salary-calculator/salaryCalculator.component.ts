import { Component } from '@angular/core'
import { SalaryCalculatorModel } from './SalaryCalculatorModel';

@Component({
	selector : 'salary-calculator',
	templateUrl : './salaryCalculator.template.html',
	styleUrls : ['./salaryCalculator.style.css']
})
export class SalaryCalculatorComponent{
	calculator : SalaryCalculatorModel = new SalaryCalculatorModel();
	
}