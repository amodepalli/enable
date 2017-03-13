import { Component, OnInit,EventEmitter } from '@angular/core';
import {MaterializeDirective,MaterializeAction} from "angular2-materialize";


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: []
})
export class WelcomeComponent implements OnInit {
  readTerms: false;
  modalActions = new EventEmitter<string|MaterializeAction>();
  params = []
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }
  constructor() { 
  	 
  }

  ngOnInit() {
  }

}
