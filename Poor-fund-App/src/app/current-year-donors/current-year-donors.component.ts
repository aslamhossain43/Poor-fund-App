import { Component, OnInit } from '@angular/core';
import { Donors } from '../add-me-as-donors/add-me-as-donors';
import { CurrentYaerTotalDonorService } from './current-year-donors.service';

@Component({
  selector: 'app-current-year-donors',
  templateUrl: './current-year-donors.component.html',
  styleUrls: ['./current-year-donors.component.scss']
})
export class CurrentYearDonorsComponent implements OnInit {
  currentYearTotalDonors: Donors[];
  constructor(private currentYearTotalDonorService: CurrentYaerTotalDonorService) { }

  ngOnInit(): void {
    this.getCurrentYearTotalDonors();
  }
  getCurrentYearTotalDonors(): void {
    this.currentYearTotalDonorService.getCurrentYearTotalDonors()
      .subscribe((currentYearTotalDonors) => {
        this.currentYearTotalDonors = currentYearTotalDonors;
      },
        (error) => {

        });
  }
}
