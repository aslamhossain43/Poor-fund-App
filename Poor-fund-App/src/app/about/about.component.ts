import { Component, OnInit, HostBinding } from '@angular/core';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
 // animations : [moveIn()]
})
export class AboutComponent implements OnInit {

  constructor() { }

// @HostBinding('@moveIn')

  ngOnInit() {
  }

}
