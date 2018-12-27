import { Component, OnInit } from '@angular/core';
import { Donors } from '../add-me-as-donors/add-me-as-donors';
import { LastYaerTotalDonorService } from './last-year-donors.service';

@Component({
  selector: 'app-last-year-donors',
  templateUrl: './last-year-donors.component.html',
  styleUrls: ['./last-year-donors.component.scss']
})
export class LastYearDonorsComponent implements OnInit {
  lastYearTotalDonors: Donors[];
  constructor(private lastYearTotalDonorService: LastYaerTotalDonorService) { }

  ngOnInit(): void {
    this.getLastYearTotalDonors();
  }
  getLastYearTotalDonors(): void {
    this.lastYearTotalDonorService.getLastYearTotalDonors()
      .subscribe((lastYearTotalDonors) => {
        this.lastYearTotalDonors = lastYearTotalDonors;
      },
        (error) => {

        });
  }
}
