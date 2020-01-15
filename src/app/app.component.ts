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
    const fragment = document.createRange().createContextualFragment(`<script async data-tc-embed-info='{"apiBaseroute":"https://api-demo-staging.toucantoco.com","credentials":{"username":"public@toucantoco","password":"wc4SSzp5T67akeyR"},"embedToken":"b0a2642c-9608-40b4-94f2-d77f76987b70","embedType":"story","locale":"fr","id":"demo-story-4001","instanceUrl":"https://demo-staging.toucantoco.com","smallAppId":"demo"}' src="https://demo-staging.toucantoco.com/scripts/embedLauncher.js" type="text/javascript"></script>`);
    document.querySelector('.tctcEmbed').appendChild(fragment);
  }
}
