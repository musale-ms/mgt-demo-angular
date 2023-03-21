import { Component, OnInit } from '@angular/core';
import { Msal2Provider } from '@microsoft/mgt-msal2-provider';
import {
  Providers,
  ProviderState,
  TemplateHelper,
} from '@microsoft/mgt-element';
import { environment } from '../environments/environment';
import '@microsoft/mgt-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'MGT V3 Preview 1';
  isLoggedIn: boolean = false;

  constructor() {}

  ngOnInit(): void {
    Providers.globalProvider = new Msal2Provider({
      clientId: environment.clientId,
    });
    TemplateHelper.setBindingSyntax('[[', ']]');
    this.isLoggedIn = Providers.globalProvider.state === ProviderState.SignedIn;
  }
}
