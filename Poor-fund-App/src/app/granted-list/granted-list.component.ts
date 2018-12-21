import { Component, OnInit } from '@angular/core';
import { GrantedList } from './granted-list';
import { GrantedListService } from './granted-list.service';

@Component({
  selector: 'app-granted-list',
  templateUrl: './granted-list.component.html',
  styleUrls: ['./granted-list.component.scss']
})
export class GrantedListComponent implements OnInit {
grantedList: GrantedList[];

  constructor(private grantedListService: GrantedListService) { }

  ngOnInit(): void {
  this.getGrantedList();
  }

getGrantedList(): void {
this.grantedListService.getGrantedList()
.subscribe((grantedList) => {
  this.grantedList = grantedList;
  console.log(grantedList);
},
(error) => {
});

}
}
