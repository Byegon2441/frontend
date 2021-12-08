import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FullName } from '../shared/fullname.model';
import { FullnameService } from '../shared/fullname.service';

@Component({
  selector: 'app-fullname',
  templateUrl: './fullname.component.html',
  styleUrls: ['./fullname.component.css'],
})
export class FullnameComponent implements OnInit {
  constructor(
    public service: FullnameService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord: FullName) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePaymentDetail(id).subscribe(
        (res) => {
          this.service.refreshList(),
            this.toastr.error('Delete successfully', 'Payment Detail Register');
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
