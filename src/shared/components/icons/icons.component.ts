import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() iconName !:string;
  @Input() iconValue !:string;
  ifClassApply = true ;

  ngOnInit(){
    if(this.iconValue == ''){
      this.ifClassApply = false ;
    }
  }
}
