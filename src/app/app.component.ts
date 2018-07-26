import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { ListItemComponent } from "./list-item/list-item.component";
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("CollapseExpandAnimation", [
      state(
        "collapse",
        style({
          height: "0px"
        })
      ),
      state(
        "expand",
        style({
          height: "350px"
        })
      ),
      transition("expand <=> collapse", animate("400ms ease-in-out"))
    ])
  ]
})
export class AppComponent {
  title = "Cority UI Engineer Test";
  // public postNum: any;
  state: string = "expand";

  // @ViewChild(ListItemComponent) child;
  // ngAfterViewInit() {
  //   this.postNum = this.child.postNum;
  // }
  expandCollapse() {
    this.state = this.state === "expand" ? "collapse" : "expand";
  }
}
