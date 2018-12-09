import { Component, OnInit, HostBinding } from '@angular/core';
import { moveIn } from '../router.animations';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadFileService } from './consumers.upload.service';
import { Consumers } from './consumers';
import { ConsumerService } from './consumers.consumer-service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
// PROGRESS BAR

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.scss'],
  animations: [moveIn()]
})
export class ConsumersComponent implements OnInit {
    // FOR CONSUMERS
    message = '';
    consumers: Consumers[];
    consumer = new Consumers();
   // FOR FILE
   selectedpiFiles: FileList;
   currentpiFileUpload: File;
   selectedapiFiles: FileList;
   currentapiFileUpload: File;
  // FOR NG MATERIAL
 // FOR FORM FIELD
 nameFormControl = new FormControl('', [Validators.required]);
  countryFormControl = new FormControl('', [Validators.required]);
  zilaFormControl = new FormControl('', [Validators.required]);
  upozilaFormControl = new FormControl('', [Validators.required]);
 unionFormControl = new FormControl('', [Validators.required]);
 workFormControl = new FormControl('', [Validators.required]);
 contactFormControl = new FormControl('', [Validators.required]);
 bkashFormControl = new FormControl('', [Validators.required]);


  biodataForm: FormGroup = new FormGroup({
    name: this.nameFormControl,
    country: this.countryFormControl,
    zila: this.zilaFormControl,
    upozila: this.upozilaFormControl,
    union: this.unionFormControl,
    work: this.workFormControl,
    contact: this.contactFormControl,
    bkash: this.bkashFormControl
    // address: this.addressFormControl
  });
  getRequiredErrorMessage(field) {
    return this.biodataForm.get(field).hasError('required') ? 'You must enter ' : '';
  }

  ngOnInit() {
  }
  constructor(private uploadService: UploadFileService,
    private consumerService: ConsumerService) { }
@HostBinding('@moveIn')
// FOR FILE UPLOAD
selectpiFile(event) {
  this.selectedpiFiles = event.target.files;
}
selectapiFile(event) {
  this.selectedapiFiles = event.target.files;
}

uploadFile() {

  this.currentpiFileUpload = this.selectedpiFiles.item(0);
  this.currentapiFileUpload = this.selectedapiFiles.item(0);
  this.uploadService.pushFileToStorage(this.currentpiFileUpload, this.currentapiFileUpload).subscribe(event => {
  if (event instanceof HttpResponse) {
      this.message = 'Your operation has been completed successfully';
    }
    },
    (error) => {
     this.message = 'Your operation has not been completed successfully';
    });
}

// FOR CONSUMERS
// ADD CONSUMERS
addConsumers(): void {
  this.consumerService.addConsumers(this.consumer)
  .subscribe((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });

}

}

