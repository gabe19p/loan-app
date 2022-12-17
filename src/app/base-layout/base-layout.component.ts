import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, Form } from "@angular/forms";

@Component({
  selector: "app-base-layout",
  templateUrl: "./base-layout.component.html",
  styleUrls: ["./base-layout.component.scss"],
})
export class BaseLayoutComponent implements OnInit {
  calculatorForm: FormGroup;
  title: string = "LOAN CALCULATOR";
  totalInterest!: string;
  loanTotal!: number;
  interestRate!: number;
  yearTotal!: number;
  monthlyPayment!: number;
  interestPaid!: number;
  totalMonths!: number;
  totalPaid!: number;
  fixedPayment!: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.calculatorForm = this.fb.group({
      loanTotal: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$"),
        ]),
      ],
      interestRate: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$"),
        ]),
      ],
      yearTotal: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$"),
        ]),
      ],
    });
  }

  get form() {
    return this.calculatorForm.controls;
  }

  calculate() {
    // convert interest into decimal
    this.interestRate = this.form.interestRate.value / 100;
    console.log(this.interestRate);

    // total interest paid
    this.interestPaid =
      this.form.loanTotal.value * this.interestRate * this.form.yearTotal.value;
    // user friendly dollar format of total interest
    this.totalInterest = `$` + this.interestPaid.toFixed(2);

    // years to months conversion
    this.totalMonths = this.form.yearTotal.value * 12;

    // type control of the loan total amount
    this.loanTotal = parseInt(this.form.loanTotal.value);

    // total amount of loan cost after interest
    this.totalPaid = this.loanTotal + this.interestPaid;

    // monthly payment
    this.monthlyPayment = this.totalPaid / this.totalMonths;
    this.fixedPayment = `$` + this.monthlyPayment.toFixed(2);
  }
}
