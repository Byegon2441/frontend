import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FullName } from 'src/app/shared/fullname.model';
import { FullnameService } from 'src/app/shared/fullname.service';

@Component({
  selector: 'app-fullname-form',
  templateUrl: './fullname-form.component.html',
  styleUrls: ['./fullname-form.component.css'],
})
export class FullnameFormComponent implements OnInit {
  constructor(public service: FullnameService, private toastr: ToastrService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    // if (this.service.formData.id == 0) this.insertRecord(form);
    // else this.updateRecord(form);
    this.insertRecord(form);
  }
  onUpdate(form: NgForm) {
    this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe(
      (res) => {
        this.resetFrom(form);
        this.service.refreshList();
        this.toastr.success(
          'Submitted successfully',
          'Payment Detail Register'
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe(
      (res) => {
        this.resetFrom(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Payment Detail Register');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  resetFrom(form: NgForm) {
    form.form.reset();
    this.service.formData = new FullName();
  }
}
