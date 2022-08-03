import { Component, OnInit } from '@angular/core';
import { CalculationService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  inputData: string = '';
  constructor(private calculatorService: CalculationService) {}

  ngOnInit(): void {
    this.calculatorService.listenCurrentValue((value) => {
      this.inputData = value.toString();
    });
  }
  onClick(input: string) {
    let temp = parseFloat(input);
    if (isNaN(temp)) {
      this.calculatorService.currentOperator = input;
      console.log(input);
      this.calculatorService.previousValue = this.calculatorService.currentValue;
      this.calculatorService.setCurrentValue(0);
    } else {
      console.log(this.calculatorService.currentValue, temp);
      this.calculatorService.setCurrentValue(
        parseFloat(`${this.calculatorService.currentValue}${temp}`)
      );
    }
  }
  reset() {
    this.calculatorService.reset();
  }
  calculate() {
    let result = this.calculatorService.calculate(
      this.calculatorService.previousValue,
      this.calculatorService.currentValue,
      this.calculatorService.currentOperator
    );
    this.calculatorService.reset();
    this.calculatorService.setCurrentValue(result);
  }
}