import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Bank } from 'src/app/shared/bank.model';
import { BankService } from 'src/app/shared/bank.service';

@Component({
  selector: 'app-bank-form',
  templateUrl: './bank-form.component.html',
  styleUrls: ['./bank-form.component.css'],
})
export class BankFormComponent implements OnInit {
  constructor(public service: BankService, private toastr: ToastrService) {}

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
    this.service.formData = new Bank();
  }
}
