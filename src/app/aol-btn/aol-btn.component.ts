import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aol-btn',
  templateUrl: './aol-btn.component.html',
  styleUrls: ['./aol-btn.component.css']
})
export class AolBtnComponent implements OnInit {

  modalTitle = 'This is the modal title';
  modalBody = 'This is the modal body';

  public closeModal(){}

  constructor() {
  }

  ngOnInit(): void {
  }

}
