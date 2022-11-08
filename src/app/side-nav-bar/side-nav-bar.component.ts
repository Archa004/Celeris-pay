import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {

  constructor(private router: Router) {}
  payClick() {
    console.log("done")
    this.router.navigate(['/payment']);
  }
  subClick() {
    console.log("done")
    this.router.navigate(['/subscription']);
  }
  
  intClick() {
    console.log("done")
    this.router.navigate(['/integration']);
  }
  secureClick() {
    console.log("done")
    this.router.navigate(['/secure']);
  }
  faqClick() {
    console.log("done")
    this.router.navigate(['/faq']);
  }
  testingClick() {
    console.log("done")
    this.router.navigate(['/testing']);
  }

  ngOnInit(): void {
  }

}
