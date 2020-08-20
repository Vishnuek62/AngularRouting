import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routingcomponent-ex',
  template: `
    <p>Routing and navigation</p>

    <nav>
        <a routerLink="employee">Employee</a>
        <a routerLink="department">Department</a>
    </nav>  
  `,
  styles: [
  ]
})
export class RoutingcomponentExComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
