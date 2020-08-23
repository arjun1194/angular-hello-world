import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  form = {
    valueset:{
      valuesetName:''
    },
    valuesetValue:{
      valuesetName:'',
      values: ''
    },
    resp:{
      resKey:'',
      appName:'',
      reqGroup:''
    },
    profile:{
      profileName:'',
      levelName:'',
      applicationShortname:'',
      prof:'',
      appShortName:'',
      respName:''
    },
    message:{
      messageName:'',
      appName:''
    },
    flexfield:{
      fieldName:'',
      contextCode:'',
      applicationShortname:'',
      attribute:''
    }

  };


  valueSetSubmitted(val){
    this.form.valueset = val;
  }

  valuesetValueSubmitted(val){
    this.form.valuesetValue = val;
  }
  respSubmitted(val){
    this.form.resp = val;
  }
  profileSubmitted(val){
    this.form.profile = val;
  }
  messageSubmitted(val){
    this.form.message = val
  }
  flexfieldSubmitted(val){
    this.form.flexfield = val
  }


   get checkForm(){
    return JSON.stringify(this.form)
  }






}

