import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Bank } from '../shared/bank.model';
import { BankService } from '../shared/bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css'],
})
export class BankComponent implements OnInit {
  constructor(public service: BankService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: Bank) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePaymentDetail(id).subscribe(
        (res) => {
          this.service.refreshList(),
            this.toastr.error('Delete successfully', '');
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
