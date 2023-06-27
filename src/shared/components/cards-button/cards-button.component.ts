import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-button',
  templateUrl: './cards-button.component.html',
  styleUrls: ['./cards-button.component.scss']
})
export class CardsButtonComponent implements OnInit {
  @Input() buttonType!:string;
  @Input() storyButton !:boolean;
  hoverBackGround = '';
  hoverClass = '';
  UniversalButtonStyle = '';

  constructor(){}

  ngOnInit(){
    this.CheckStyle();
  }

  CheckStyle(){
    if(this.buttonType == 'Apply' || this.buttonType == 'View Detail'){
      this.hoverClass = 'applyAndViewDetail';
    }
    else if(this.buttonType == 'Closed'){
      this.hoverClass = 'closed';
    }
    else if(this.buttonType == 'Pending'){
      this.hoverClass = 'pending';
    }
    else{
      return;
    }
  }

  changeBackGroundColor(str :string){
    if(str = ''){
      this.hoverBackGround = '';
    }
    else{
      if(this.buttonType == 'Apply' || this.buttonType == 'View Detail'){
        this.hoverClass = 'applyAndViewDetail';
      }
      else if(this.buttonType == 'Closed'){
        this.hoverClass = 'closed';
      }
      else if(this.buttonType == 'Pending'){
        this.hoverClass = 'pending';
      }
      else{
        return;
      }
    }
  }
}
