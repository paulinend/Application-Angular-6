import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // @Input('test')test: string;
  // @Output() Out: EventEmitter<any> = new EventEmitter();
  title: string;
  isCollapsed: boolean;
  constructor() { }

  ngOnInit() {
    this.title = 'Formation Angular 6';
    this.isCollapsed = false;
  }

  // Onclick() {
  //   this.Out.emit('ok');
  //   alert('click on button');
  // }

}
