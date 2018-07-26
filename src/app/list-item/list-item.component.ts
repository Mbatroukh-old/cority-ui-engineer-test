import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.css"]
})
export class ListItemComponent implements OnInit {
  posts: Object[];
  postNum: any;

  constructor() {
    this.posts = [
      {
        img: "assets/image1.jpeg",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        sub_title:
          "Aenean suscipit tortor vitae lectus consectetur, ac dictum nibh convallis",
        content:
          "Phasellus placerat et mi eget aliquam. Proin interdum blandit metus. Nam eget accumsan sem. Mauris vel lacus leo. Ut eu vulputate magna. Nulla facilisi. Nulla non orci feugiat lacus porttitor faucibus. Proin laoreet semper consequat. Fusce viverra leo ac turpis imperdiet ultrices."
      },
      {
        img: "",
        title: "Cras sodales eu augue nec congue",
        sub_title: "Curabitur tortor ex, dignissim vitae purus vel",
        content:
          "Interdum malesuada est. Sed non euismod tellus. In bibendum ultrices diam vitae tempus. Etiam finibus pretium dapibus. Aenean dictum ex ut lacus mollis efficitur eu sit amet libero. Nam et nibh quis quam accumsan rhoncus. Vivamus scelerisque suscipit nibh, vitae malesuada nulla sodales rhoncus. Praesent viverra euismod eros et suscipit. Aliquam iaculis convallis risus ut accumsan."
      },
      {
        img: "assets/image2.jpeg",
        title: "Aenean imperdiet metus at lectus molestie",
        sub_title: "Nam vestibulum egestas ultricies",
        content:
          "Pellentesque vitae scelerisque ipsum. Fusce fermentum commodo tellus, ut congue libero scelerisque eget."
      },
      {
        img: "assets/image3.jpeg",
        title: "Duis egestas dolor non velit malesuada",
        sub_title: "at rhoncus justo sodales",
        content:
          "Aliquam sed dolor non quam aliquet fermentum sed at tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla urna velit, viverra sit amet elit eget, aliquam porttitor turpis."
      }
    ];
    this.postNum = this.posts.length;
  }

  ngOnInit() {}
}

@Component({
  selector: "date-pipe",
  template: `<span class="date">
        <img src="assets/calendar.png" alt="calendar icon">{{today | date:"EEE MMM dd yyyy"}}</span>`,
  styles: [
    `
      .date {
        font-size: 14px;
        color: #aaa;
        display: flex;
        align-items: center;
        padding-top: 10px;
      }
      .date img {
        width: 20px;
        margin-right: 10px;
      }
    `
  ]
})
export class DatePipeComponent {
  today: number = Date.now();
}