import { Component, OnInit } from '@angular/core';
import { Staffs } from './staff-directory';
import { StaffDirectoryService } from './staff-directory.service';

@Component({
  selector: 'app-staff-directory',
  templateUrl: './staff-directory.component.html',
  styleUrls: ['./staff-directory.component.scss']
})
export class StaffDirectoryComponent implements OnInit {
// FOR MODEL
staffs: Staffs[];
  constructor(private staffDirectoryService: StaffDirectoryService) { }

  ngOnInit(): void {
  this.getAllStaff();
  }
  getAllStaff(): void {
    this.staffDirectoryService.getStaff()
    .subscribe((staffs) => {
  this.staffs = staffs;
    },
    (error) => {

    });
  }

}

