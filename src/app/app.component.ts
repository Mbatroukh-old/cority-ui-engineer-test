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
  state: string = "expand";
  postNum: any;
  @ViewChild(ListItemComponent) child;
  ngOnInit() {
    this.postNum = this.child.postNum;
  }
  expandCollapse() {
    this.state = this.state === "expand" ? "collapse" : "expand";
  }
  addItem() {
    this.child.posts.push({
      img: "assets/image4.jpeg",
      title: "Mauris accumsan porta accumsan",
      sub_title: "Cras faucibus rhoncus purus vel pharetra",
      content:
        "Sed ultricies mi non turpis efficitur, vel posuere augue sollicitudin. Aenean maximus odio vitae laoreet bibendum. Pellentesque eu nunc erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent mollis eget odio a tristique. Pellentesque eu mattis erat. Quisque tempus turpis ut arcu tempor, eu dictum nisl vehicula. Sed vel malesuada urna, posuere imperdiet nibh. Phasellus eget dui pellentesque metus condimentum elementum ac sed justo."
    });
    this.postNum = this.child.postNum;
  }
  constructor() {}
}
