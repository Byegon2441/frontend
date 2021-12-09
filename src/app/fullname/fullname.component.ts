import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import liff from '@line/liff';
import { FullnameService } from '../shared/fullname.service';
@Component({
  selector: 'app-fullname',
  templateUrl: './fullname.component.html',
  styleUrls: ['./fullname.component.css'],
})
export class FullnameComponent implements OnInit {

      // pictureUrl:string
      userId:string
      displayName:string
     
      // statusMessage:string
  constructor(public service: FullnameService,) {
    liff.init({ liffId: '1656702962-jwyWx4xW' }, () => {
      if (liff.isLoggedIn()) {
        this.runApp()

      } else {
        // liff.login();
      }
    });
  }

    runApp() {
    liff.getProfile().then(profile => {
    //  this.pictureUrl = profile.pictureUrl;
      this.userId =   profile.userId;
      this.displayName = profile.displayName;
      // this.statusMessage = profile.statusMessage;
    }).catch(err => console.error(err));
  }

  onSubmit(form: NgForm){
    this.service.formData.userId = this.userId
    this.service.postPaymentDetail();
  }

  ngOnInit(): void {}
}
