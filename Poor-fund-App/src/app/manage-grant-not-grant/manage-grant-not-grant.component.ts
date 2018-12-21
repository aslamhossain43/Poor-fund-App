import { Component, OnInit } from '@angular/core';
import { Grantnotgrant } from './manage-grant-not-grant';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ManageGrantNotGrantService } from './manage-grant-not-grant.service';
import { AllCandidates } from './manage-grant-not-grant.all-candidates';

@Component({
  selector: 'app-manage-grant-not-grant',
  templateUrl: './manage-grant-not-grant.component.html',
  styleUrls: ['./manage-grant-not-grant.component.scss']
})
export class ManageGrantNotGrantComponent implements OnInit {
  // FOR MESSAGE
  msg = '';
  // FOR FILE
  selectedProvedFiles: FileList;
  currentProvedFiles: File;
  // FOR MODEL
  grantNotGrant = new Grantnotgrant();
  allCandidates: AllCandidates[];
  // FORM FIELD CONTROL
  selectedProvedFileControl = new FormControl('', [Validators.required]);
   grantNotGrantIdFormControl = new FormControl('', [Validators.required]);
  statusFormControl = new FormControl('', [Validators.required]);
  biodataForm: FormGroup = new FormGroup({
    selectedProvedFile: this.selectedProvedFileControl,
    status: this.statusFormControl,
    grantNotGrantId: this.grantNotGrantIdFormControl
  });
  getRequiredErrorMessage(field) {
    if (this.biodataForm.get(field).hasError('required')) {
      return this.biodataForm.get(field).hasError('required') ? 'You must enter ' + field : '';
    }
  }
  constructor(private grantNotGrantService: ManageGrantNotGrantService) { }

  ngOnInit(): void {
    this.getAllCandidates();
  }
// FOR FILE
selectProvedFile(event) {
this.selectedProvedFiles = event.target.files;
}




  addGrantNotGrant() {
    this.msg = 'onMsg';
    this.currentProvedFiles = this.selectedProvedFiles.item(0);
    this.grantNotGrantService.pushGrantNotGrantFiles(this.currentProvedFiles, this.grantNotGrant.status,
      this.grantNotGrant.grantNotGrantId)
      .subscribe(response => {
        if (response.statusText === 'OK') {
          alert('Your operation has been completed successfully !');
          this.msg = '';
        }
      }, (error) => {
        alert('Fail operation ! ,please insert valid value !!!');
        this.msg = '';
        this.reset();
      });

  }

  reset() {
    this.grantNotGrant.selectedProvedFile = null;
    this.grantNotGrant.grantNotGrantId = null;
    this.grantNotGrant.status = null;
  }
// GET CANDIDATES
getAllCandidates(): void {
  this.grantNotGrantService.getAllCandidatesList()
  .subscribe((allCandidates) => {
    this.allCandidates = allCandidates;
  },
  (error) => {
  });

  }






}
