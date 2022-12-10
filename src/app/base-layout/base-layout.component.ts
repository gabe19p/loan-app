import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-base-layout",
  templateUrl: "./base-layout.component.html",
  styleUrls: ["./base-layout.component.scss"],
})
export class BaseLayoutComponent implements OnInit {
  title: string = "LOAN CALCULATOR";

  constructor() {}

  ngOnInit(): void {}
}
