// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-demo',
//   templateUrl: './demo.component.html',
//   styleUrls: ['./demo.component.css']
// })
// export class DemoComponent {

// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  isLoggedIn = false;
  items = ['Item 1', 'Item 2', 'Item 3'];
}

