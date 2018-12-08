import { Component, OnInit, HostBinding } from '@angular/core';
import { moveIn } from '../router.animations';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadFileService } from './consumers.upload.service';
import { Consumers } from './consumers';
import { ConsumerService } from './consumers.consumer-service';
@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.scss'],
  animations: [moveIn()]
})
export class ConsumersComponent implements OnInit {
  // FOR CONSUMERS
   consumers: Consumers[];
   consumer = new Consumers();
  // FOR FILE
  selectedpiFiles: FileList;
  currentpiFileUpload: File;
  selectedapiFiles: FileList;
  currentapiFileUpload: File;
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
      console.log('File is completely uploaded!');
    }
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
  ngOnInit() {
  }

}
