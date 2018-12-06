import { Component, OnInit, HostBinding } from '@angular/core';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.scss'],
  animations: [moveIn()]
})
export class ConsumersComponent implements OnInit {

  constructor() { }
@HostBinding('@moveIn')
  ngOnInit() {
  }

}
