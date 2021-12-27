import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ByTanyaR';
  public screenHeight: any;

  constructor(@Inject(DOCUMENT) private document: Document) { }
  
  ngOnInit() {
      this.screenHeight = window.innerHeight;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let timeout = null;

    if (document.body.scrollTop > 50 ||     
    document.documentElement.scrollTop > 50) {
      document.getElementById('mainNav').classList.add('nav-up');
      document.getElementById('mainContainer').classList.add('nav-up');
      document.getElementById('mainNav').classList.remove('fade');
    } else if (document.body.scrollTop == 0){
      document.getElementById('mainNav').classList.add('fade');
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(function() {
        document.getElementById('mainNav').classList.remove('nav-up');
        document.getElementById('mainNav').classList.remove('fade');
        document.getElementById('mainContainer').classList.remove('nav-up');
      }, 1000)
    }  
  }
}
