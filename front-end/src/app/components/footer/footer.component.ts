import { Component, OnInit } from '@angular/core';
import { routerNgProbeToken, RouterModule } from '@angular/router/src/router_module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  //   $(document).ready(functin () {

  //     $(window).scroll(function () {
  //         if ($(this).scrollTop() > 100) {
  //             $('.scroll-top').fadeIn();
  //         } else {
  //             $('.scroll-top').fadeOut();
  //         }
  //     });

  //     $('.scroll-top').click(function () {
  //         $("html, body").animate({
  //             scrollTop: 0
  //         }, 100);
  //         return false;
  //     });

  // });

}
