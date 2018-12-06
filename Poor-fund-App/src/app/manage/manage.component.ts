import { Component, OnInit, HostBinding } from '@angular/core';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
  animations: [moveIn()]
})
export class ManageComponent implements OnInit {

  constructor() { }
@HostBinding('@moveIn')
  ngOnInit() {
  }

}
