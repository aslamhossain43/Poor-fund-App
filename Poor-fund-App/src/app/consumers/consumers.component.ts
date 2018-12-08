import { Component, OnInit, HostBinding } from '@angular/core';
import { moveIn } from '../router.animations';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadFileService } from './consumers.upload.service';
@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.scss'],
  animations: [moveIn()]
})
export class ConsumersComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File;
  constructor(private uploadService: UploadFileService) { }
@HostBinding('@moveIn')
// FOR FILE UPLOAD
selectFile(event) {
  this.selectedFiles = event.target.files;
}

upload() {
  this.currentFileUpload = this.selectedFiles.item(0);
  this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
    if (event instanceof HttpResponse) {
      console.log('File is completely uploaded!');
    }
    });
}



  ngOnInit() {
  }

}
