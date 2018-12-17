import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { moveIn } from '../router.animations';
import { VERSION, MatMenuTrigger} from '@angular/material';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
 // animations : [moveIn()]
})
export class AboutComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  constructor() { }

// @HostBinding('@moveIn')
version = VERSION;

ngOnInit(): void {

}


}
