import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-compute',
  templateUrl: './compute.component.html',
  styleUrls: ['./compute.component.css']
})
export class ComputeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  compute(inputNumber: number) {
    if (inputNumber < 0) {
      return 0;
    }
    return inputNumber + 1;
  }

  greet(name: string) {
    return name + 'welcome';
  }

  getCurrencies() {
    return ['USD', 'AUD', 'EUR'];
  }

}
