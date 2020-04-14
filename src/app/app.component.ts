import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'embed-angular';

  constructor() {
  }

  ngOnInit() {
    const fragment = document.createRange().createContextualFragment(`<script async src="https://demo-embed.toucantoco.com/scripts/embedLauncher.js?id=ba817dc8-e1e6-4ee0-8ac8-b461d52e1b20"type="text/javascript"></script>`);
    document.querySelector('.tctcEmbed').appendChild(fragment);
  }
}
