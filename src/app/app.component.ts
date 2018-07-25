import { Component } from '@angular/core';
import { ListItemComponent } from "./list-item/list-item.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Cority UI Engineer Test";
}

@Component({
  selector: "expand-collapse",
  template: `
    <div><img src="assets/down-arrow.png" alt="expand and collapse section"></div>
  `,
  styles: [
    `
      div {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        float: left;
      }
      div img {
        width: 10px;
      }

      div:hover {
        background: #d7d7d7;
      }
    `
  ]
})
export class ExpandComponent {
}