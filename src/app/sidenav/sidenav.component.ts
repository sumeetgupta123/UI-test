import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  buttons = [
    { name: 'Dashboard', router: '/Dashboard'},
    { name: 'Task & management', router: '/task'},
    { name: 'Stocks', router: ''},
    { name: 'Sales', router: ''},
    { name: 'Production plan', router: ''},
    { name: 'Reports', router: ''},
  ]
}
