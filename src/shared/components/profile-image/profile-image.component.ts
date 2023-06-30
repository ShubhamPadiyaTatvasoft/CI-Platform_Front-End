import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent implements OnInit{
  @Input() public img!:string;
  emptyImage = '../assets/Images/user-img.png';

  ngOnInit(){
    //this.img = '../assets/Images/user-img.png';
    // if(this.img == null){
    //   this.img = '../assets/Images/user-img.png';
    // }
  }

}
