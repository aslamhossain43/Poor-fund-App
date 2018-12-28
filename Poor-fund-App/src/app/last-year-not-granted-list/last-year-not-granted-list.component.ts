import { Component, OnInit } from '@angular/core';
import { LastYearNotGrantedList } from './last-year-not-granted-list';
import { LastYearNotGrantedListService } from './last-year-not-granted-list.service';

@Component({
  selector: 'app-last-year-not-granted-list',
  templateUrl: './last-year-not-granted-list.component.html',
  styleUrls: ['./last-year-not-granted-list.component.scss']
})
export class LastYearNotGrantedListComponent implements OnInit {
  lastYearNotGrantedList: LastYearNotGrantedList[];
  notGranted = 'Not-Granted';
  constructor(private lastYearNotGrantedListService: LastYearNotGrantedListService) { }

  ngOnInit(): void {
    this.getLastYearNotGrantedList();
    }



  getLastYearNotGrantedList(): void {
    this.lastYearNotGrantedListService.getLastYearNotGrantedList()
    .subscribe((lastYearNotGrantedList) => {
      this.lastYearNotGrantedList = lastYearNotGrantedList;
      console.log(lastYearNotGrantedList);
    },
    (error) => {
    });
    }
}
