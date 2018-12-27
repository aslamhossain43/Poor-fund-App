import { Component, OnInit } from '@angular/core';
import { LastYearGrantedList } from './last-year-granted-list';
import { LastYearGrantedListService } from './last-year-granted-list.service';

@Component({
  selector: 'app-last-year-granted-list',
  templateUrl: './last-year-granted-list.component.html',
  styleUrls: ['./last-year-granted-list.component.scss']
})
export class LastYearGrantedListComponent implements OnInit {
  lastYearGrantedList: LastYearGrantedList[];
  granted = 'Granted';
    constructor(private lastYearGrantedListService: LastYearGrantedListService) { }
    ngOnInit(): void {
    this.getLastYearGrantedList();
    }
  getLastYearGrantedList(): void {
  this.lastYearGrantedListService.getLastYearGrantedList()
  .subscribe((lastYearGrantedList) => {
    this.lastYearGrantedList = lastYearGrantedList;
    console.log(lastYearGrantedList);
  },
  (error) => {
  });
  }

}
