import { Component, OnInit } from '@angular/core';
import { Donors } from '../add-me-as-donors/add-me-as-donors';
import { TotalDonorService } from './total-donors.service';

@Component({
  selector: 'app-total-donors',
  templateUrl: './total-donors.component.html',
  styleUrls: ['./total-donors.component.scss']
})
export class TotalDonorsComponent implements OnInit {
  totalDonors: Donors[];
  constructor(private totalDonorService: TotalDonorService) { }

  ngOnInit(): void {
    this.getTotalDonors();
  }
  getTotalDonors(): void {
    this.totalDonorService.getTotalDonors()
      .subscribe((totalDonors) => {
        this.totalDonors = totalDonors;
      },
        (error) => {

        });
  }
}
