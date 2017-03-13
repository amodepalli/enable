import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,FormArray } 
    from '@angular/forms';
import {MaterializeDirective,MaterializeAction} from "angular2-materialize";

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styles: []
})
export class MeasurementsComponent implements OnInit {

  handWidth = new FormControl("", Validators.required)
  handLength = new FormControl("",Validators.required)
  handType = new FormControl("",Validators.required)
  height = new FormControl("",Validators.required)
  weight = new FormControl("",Validators.required)
  accuracyLevel = new FormControl(1,Validators.required)

  //needed to ensure that the form does not get duplicated formcontrol values
  //if user decides to change accuracy vals
  accuracyLevelChanged = false
  accuracyLevelTwoEnabled = false
  accuracyLevelThreeEnabled = false

  //initialzing form with minimum required form vals
  form= new FormGroup({
        "handType": this.handType,
        "height": this.height,
        "weight": this.weight,
        "accuracyLevel":this.accuracyLevel
  });


  // Allows for modals in html to open and close
  modalActions = new EventEmitter<string|MaterializeAction>();
  params = []
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  //initialization steps
  constructor() {}

  ngOnInit(){
  }

  
  accuracyLevelChange(){

    if(this.accuracyLevel.value == 1){

      //if user pressed decides to change accuracy level
      //ensure that the form does not contain other addtional inputs
      //allows next button to continue
      if(this.accuracyLevelTwoEnabled == true){
        this.form.removeControl("handWidth");
        this.accuracyLevelChanged = false;
        this.accuracyLevelTwoEnabled = false;
      }

      if(this.accuracyLevelThreeEnabled == true){
        this.form.removeControl("handWidth");
        this.form.removeControl("handLength")
        this.accuracyLevelChanged = false;
        this.accuracyLevelThreeEnabled = false;
      }



    }
    if (this.accuracyLevel.value == 2 && !this.accuracyLevelTwoEnabled) {
        this.form.addControl("handWidth", this.handWidth);
        this.accuracyLevelTwoEnabled = true;
        this.accuracyLevelChanged = true
    }

    if (this.accuracyLevel.value == 3 && !this.accuracyLevelThreeEnabled) {
        this.form.addControl("handWidth", this.handWidth);
        this.form.addControl("handLength", this.handWidth);
        this.accuracyLevelThreeEnabled = true;
        this.accuracyLevelChanged = true
    }

    
  }


  onSubmit() {
        console.log(this.handType);
        console.log(this.handWidth);
        console.log(this.form.controls['accuracyLevel'].value)
  }

}



