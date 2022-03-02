import { Component, OnInit } from '@angular/core';
import { models } from 'powerbi-client';
import {AuthenticationService} from './Services/authentication.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  accessToken = '';
  embedUrl = '';
  title = 'embedBi';
  embedURL:string = "";
   embedConfig = {} ;

  embedContainer = 'embedContainer';

  eventHandlers = 
    new Map([
      ['loaded', () => console.log('Report loaded')],
      ['rendered', () => console.log('Report rendered')],
      //['error', (event) => console.log(event.detail)]
  ]);
  
  constructor(private authenticationService: AuthenticationService){}

  ngOnInit(): void {
     this.authenticationService.fetchReport().subscribe(data => {
       console.log(data);
       this.accessToken = data.accessToken;
       this.embedUrl = data.embedUrl[0].embedUrl;
       this.embedConfig= {
        type: "report",
            id: '278669be-d747-4c61-8420-53bcf7fd3c2a',
            embedUrl: this.embedUrl ,
            accessToken: this.accessToken,
            tokenType: models.TokenType.Embed,
            settings: {
                panes: {
                    filters: {
                        expanded: false,
                        visible: false
                    }
                },
                background: models.BackgroundType.Transparent,
            }
      }
     })
  }


}
