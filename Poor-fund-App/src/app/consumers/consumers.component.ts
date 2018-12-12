import { Component, OnInit, HostBinding } from '@angular/core';
import { moveIn, consumerMoveIn } from '../router.animations';
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
  animations: [consumerMoveIn()]
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
 nameFormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]);
  countryFormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]);
  zelaFormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]);
  upozelaFormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]);
 unionFormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]);
 workFormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]);
 contactFormControl = new FormControl('', [Validators.required]);
 bkashFormControl = new FormControl('', [Validators.required]);


  biodataForm: FormGroup = new FormGroup({
    name: this.nameFormControl,
    country: this.countryFormControl,
    zela: this.zelaFormControl,
    upozela: this.upozelaFormControl,
    union: this.unionFormControl,
    work: this.workFormControl,
    contact: this.contactFormControl,
    bkash: this.bkashFormControl
    // address: this.addressFormControl
  });
  // FOR STRING VALIDATION
  getRequiredErrorMessageForString(field) {
    if (this.biodataForm.get(field).hasError('required')) {
      return this.biodataForm.get(field).hasError('required') ? 'You must enter ' + field : '';
    } else if (this.biodataForm.get(field).hasError('minlength')) {
      return this.biodataForm.get(field).hasError('minlength') ? 'You must enter ' + field + ' minimum 3 characters' : '';
    } else if (this.biodataForm.get(field).hasError('maxlength')) {
      return this.biodataForm.get(field).hasError('maxlength') ? 'You must enter ' + field + ' maximum 30 characters' : '';
    } else {
    return this.biodataForm.get(field).hasError('type') ? 'You must enter valid ' + field : '';
    }
  }

  getRequiredErrorMessageForNumber(field) {
    return this.biodataForm.get(field).hasError('required') ? 'You must enter valid ' + field + ' number' : '';
  }

  ngOnInit() {
  }
  constructor(private uploadService: UploadFileService,
    private consumerService: ConsumerService) { }
 @HostBinding('@consumerMoveIn')
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
  this.uploadService.pushFileToStorage(this.currentpiFileUpload, this.currentapiFileUpload)
  .subscribe(event => {
  if (event instanceof HttpResponse) {
      this.message = 'Your operation has been completed successfully';
      console.log(event);
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

