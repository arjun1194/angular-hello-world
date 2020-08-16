import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {
  @Input('heading') heading;
  public valueSetFlag = false;
  public aolFlag = false;
  public vsvFlag = false;

  inputProps: {
    valueSet: [
      {
        id: 1,
        valueSetName: '';
      }
    ]
  };
  modalTitle: String = "AOL Comp";

  constructor() {}

  ngOnInit(): void {
  }

  public openValueSet(field){
    console.log("this.aolFlag",this.aolFlag)
    if(field == 'valueset'){
      this.valueSetFlag = true;
      this.vsvFlag = false;
      this.aolFlag = true;
      
      
      
    }
    else 

    console.log("this.aolFlag",this.aolFlag)
    console.log("this.valueSetFlag",this.valueSetFlag)
    

    if(field == 'valuesetvalue'){
      this.vsvFlag = true;
      this.valueSetFlag = false;
      
    
      
    }
      
    console.log("this.aolFlag",this.aolFlag)
    console.log("this.vsvFlag",this.vsvFlag)

    

  }
  //function that closes a modal with id
  public closeMod(id){
    //$(id).modal('hide')
  }
  public closeModal(){
    this.aolFlag = false;
    this.valueSetFlag = false;
    this.vsvFlag = false;
  }
}
