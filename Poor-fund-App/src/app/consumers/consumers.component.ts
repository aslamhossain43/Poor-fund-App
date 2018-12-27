import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { consumerMoveIn } from '../router.animations';
import { HttpEventType } from '@angular/common/http';
import { UploadFileService } from './consumers.upload.service';
import { Consumers } from './consumers';
import { ConsumerService } from './consumers.consumer-service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ManageGrantedService } from '../manage-granted-list/manage-granted-list.service';
import { ManageNotGrantedListService } from '../manage-not-granted-list/manage-not-granted-list.service';
import { GrantedListService } from '../granted-list/granted-list.service';
import { NotGrantedListService } from '../not-granted-list/not-granted-list.service';
import { CurrentYaerTotalDonorService } from '../current-year-donors/current-year-donors.service';
import { LastYaerTotalDonorService } from '../last-year-donors/last-year-donors.service';
import { TotalDonorService } from '../total-donors/total-donors.service';



@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.scss'],
  animations: [consumerMoveIn()]
})
export class ConsumersComponent implements OnInit {
  // FOR MESSGAE
  msg = 'offPrpgressBar';
  // FOR CONSUMERS
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
  selectedPiFileControl = new FormControl('', [Validators.required]);
  selectedApiFileControl = new FormControl('', [Validators.required]);
  // FOR CONSTRUCTOR
  constructor(private uploadService: UploadFileService,
    private consumerService: ConsumerService, private router: Router, private manageGrantedListService: ManageGrantedService,
    private manageNotGrantedListService: ManageNotGrantedListService, private grantedListService: GrantedListService,
    private notGrantedListService: NotGrantedListService, private currentYearTotalDonorService: CurrentYaerTotalDonorService,
    private lastYearTotalDonorService: LastYaerTotalDonorService, private totalDonorService: TotalDonorService) { }

  biodataForm: FormGroup = new FormGroup({
    name: this.nameFormControl,
    country: this.countryFormControl,
    zela: this.zelaFormControl,
    upozela: this.upozelaFormControl,
    union: this.unionFormControl,
    work: this.workFormControl,
    contact: this.contactFormControl,
    bkash: this.bkashFormControl,
    // FOR RESET PURPOSE ONLU
    selectedPiFile: this.selectedPiFileControl,
    selectedApiFile: this.selectedApiFileControl
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
  // FOR BINDING ANIMATION
  @HostBinding('@consumerMoveIn')
  // NG LIFE CYCLE
  ngOnInit() {

  }


  // FOR FILE UPLOAD
  selectpiFile(event) {
    this.selectedpiFiles = event.target.files;
  }
  selectapiFile(event) {
    this.selectedapiFiles = event.target.files;
  }

  uploadFile() {
    this.msg = '';
    this.currentpiFileUpload = this.selectedpiFiles.item(0);
    this.currentapiFileUpload = this.selectedapiFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentpiFileUpload, this.currentapiFileUpload)
      .subscribe(response => {
        if (response.statusText === 'OK') {
          this.addConsumers();
        }
      },
        (error) => {
          console.log(error.statusText);
          // YOU MUST NOT CHANGE THIS FORMAT
          alert('Your operation is failed ! please select valid image .');
          this.msg = 'offProgressBar';
          this.reset();
        }
      );
  }

  // FOR CONSUMERS
  // ADD CONSUMERS
  addConsumers(): void {
    this.consumerService.addConsumers(this.consumer)
      .subscribe(response => {
        if (response.statusText === 'OK') {
          alert('Your operation has been completed successfully !');
          this.reset();
          this.msg = 'offProgressBar';
        }
      },
        (error) => {
        });
  }

  reset() {
    this.consumer.name = null;
    this.consumer.country = null;
    this.consumer.zela = null;
    this.consumer.upozela = null;
    this.consumer.union = null;
    this.consumer.work = null;
    this.consumer.contact = null;
    this.consumer.bkash = null;
    this.consumer.selectedPiFile = null;
    this.consumer.selectedApiFile = null;
  }

}


