import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

 @Input() public parentData : any;
@Output() public childEvent = new EventEmitter();
public person = {
  "firstName":"Jane",
  "lastName": "Smith"
}

  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit('Hey Codevolution');
  }
}
