import { Component, OnInit } from '@angular/core';
import { IImage } from './modules/slideshow/IImage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  imageUrls: (string | IImage)[] = [
    { url: 'assets/kitties.jpg', type: 'image' },
    { url: 'assets/sparkling-ice.jpg', type: 'image' },
    { url: 'assets/fullfill2.jpg', type: 'image' },
    { url: 'assets/redbull.mp4', type: 'video' }
  ];

  height: string = '400px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';

  ngOnInit() {
    // adding an image url dynamically.
    setTimeout(() => {
      console.log('adding an image url dynamically.');
      this.imageUrls.push('https://cdn-images-1.medium.com/max/2000/1*Nccd2ofdArlXF7v58UK94Q.jpeg');
    }, 2000);
    console.log(`
                                  /   \\
 _                        )      ((   ))     (
(@)                      /|\\      ))_((     /|\\
|-|                     / | \\    (/\\|/\\)   / | \\                      (@)
| | -------------------/--|-voV---\`|'/---Vov-|--\\---------------------|-|
|-|                         '^\`   (o o)  '^\`                          | |
| |                               \`\\Y/'                               |-|
|-|                                                                   | |
| |                                Hey                                |-|
|-|                                                                   | |
| |                                                                   |-|
|_|___________________________________________________________________| |
(@)              l   /\\ /         ( (       \\ /\\   l                \`\\|-|
                 l /   V           \\ \\       V   \\ l                  (@)
                 l/                _) )_          \\I
                                   \`\\ /'
				                     \`
    `);
  }
}
