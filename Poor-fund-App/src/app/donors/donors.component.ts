import { Component, OnInit, HostBinding } from '@angular/core';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.scss'],
  animations: [moveIn()]
})
export class DonorsComponent implements OnInit {

  constructor() { }
@HostBinding('@moveIn')
  ngOnInit() {
  }

}
