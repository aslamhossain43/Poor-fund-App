import { Component, OnInit } from '@angular/core';
import { NotGrantedList } from './not-granted-list';
import { NotGrantedListService } from './not-granted-list.service';

@Component({
  selector: 'app-not-granted-list',
  templateUrl: './not-granted-list.component.html',
  styleUrls: ['./not-granted-list.component.scss']
})
export class NotGrantedListComponent implements OnInit {
  notGrantedList: NotGrantedList[];
  notGranted = 'Not-Granted';
  constructor(private notGrantedListService: NotGrantedListService) { }

  ngOnInit(): void {
    this.notGetGrantedList();
    }



  notGetGrantedList(): void {
    this.notGrantedListService.getNotGrantedList()
    .subscribe((notGrantedList) => {
      this.notGrantedList = notGrantedList;
      console.log(notGrantedList);
    },
    (error) => {
    });
    }

}
