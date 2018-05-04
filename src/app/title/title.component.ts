import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  const date = new Date();
  displayMonth(date){
    if(date.getMonth() === 0){
      return "January";
    } else if(date.getMonth() === 1){
      return "February";
    } else if(date.getMonth() === 2){
      return "March";
    } else if(date.getMonth() === 3){
      return "April";
    } else if(date.getMonth() === 4){
      return "May";
    } else if(date.getMonth() === 5){
      return "June";
    } else if(date.getMonth() === 6){
      return "July";
    } else if(date.getMonth() === 7){
      return "August";
    } else if(date.getMonth() === 8){
      return "September";
    } else if(date.getMonth() === 9){
      return "October";
    } else if(date.getMonth() === 10){
      return "November";
    } else{
      return "December";
    }
  }
  displayDay(date){
    if(date.getDay() === 0){
      return "Sunday";
    } else if(date.getDay() === 1){
      return "Monday";
    } else if(date.getDay() === 2){
      return "Tuesday";
    } else if(date.getDay() === 3){
      return "Wednesday";
    } else if(date.getDay() === 4){
      return "Thursday";
    } else if(date.getDay() === 5){
      return "Friday";
    } else if(date.getDay() === 6){
      return "Saturday";
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
