import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  // templateUrl: './hello-world.component.html',
  template: `
    <p>
      my hello world inline
    </p>
  `,
  styleUrls: ['./hello-world.component.sass']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
