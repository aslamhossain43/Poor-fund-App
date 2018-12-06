import { Component, OnInit, HostBinding } from '@angular/core';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations : [moveIn()]
})
export class ContactComponent implements OnInit {

  constructor() { }
@HostBinding('@moveIn')
  ngOnInit() {
  }

}
