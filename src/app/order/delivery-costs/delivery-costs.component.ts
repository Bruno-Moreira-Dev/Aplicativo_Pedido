import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html'
})
export class DeliveryCostsComponent implements OnInit {

  @Input() public delivery: number;
  @Input() public itemsValue: number;

  constructor() { }

  ngOnInit() {
  }

  public total(): number {
    return this.delivery + this.itemsValue;
  }

}
