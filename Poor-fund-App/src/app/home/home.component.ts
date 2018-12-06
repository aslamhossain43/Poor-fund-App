import { Component, OnInit, HostBinding } from '@angular/core';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [moveIn()]
})
export class HomeComponent implements OnInit {

  constructor() { }
@HostBinding('@moveIn')
  ngOnInit() {
  }

}
