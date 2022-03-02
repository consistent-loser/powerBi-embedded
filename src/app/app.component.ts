import { Component } from '@angular/core';
import { models } from 'powerbi-client';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'embedBi';

   embedConfig = {
    type: "report",
        id: '278669be-d747-4c61-8420-53bcf7fd3c2a',
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=278669be-d747-4c61-8420-53bcf7fd3c2a&autoAuth=true&ctid=f1a02a0b-381b-4893-816b-11261a3c9423&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLWVhc3QyLWItcHJpbWFyeS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D" ,
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZjFhMDJhMGItMzgxYi00ODkzLTgxNmItMTEyNjFhM2M5NDIzLyIsImlhdCI6MTY0NjIwNzU1MSwibmJmIjoxNjQ2MjA3NTUxLCJleHAiOjE2NDYyMTE0NTEsImFpbyI6IkUyWmdZT0Q5ZGtlMklIQUNlMnAxV1h3czE5Y1hBQT09IiwiYXBwaWQiOiJjZDg3OTkxYy03ZjIwLTQ1MTAtYjlhZS1iZDU2ZTA2NDA5ZDEiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mMWEwMmEwYi0zODFiLTQ4OTMtODE2Yi0xMTI2MWEzYzk0MjMvIiwib2lkIjoiZmRlNWVlYzktOWMzMS00MzEwLTk5ODAtODVmNzhiN2EyNDMyIiwicmgiOiIwLkFVWUFDeXFnOFJzNGswaUJheEVtR2p5VUl3a0FBQUFBQUFBQXdBQUFBQUFBQUFDQUFBQS4iLCJyb2xlcyI6WyJUZW5hbnQuUmVhZFdyaXRlLkFsbCIsIlRlbmFudC5SZWFkLkFsbCJdLCJzdWIiOiJmZGU1ZWVjOS05YzMxLTQzMTAtOTk4MC04NWY3OGI3YTI0MzIiLCJ0aWQiOiJmMWEwMmEwYi0zODFiLTQ4OTMtODE2Yi0xMTI2MWEzYzk0MjMiLCJ1dGkiOiJRLTZMS0R4ckZrR25NVjBMN004S0FBIiwidmVyIjoiMS4wIn0.c3nFH--U4jrR51Bk4WmqlWy46A8xjHV1Ok9JLyKqvPcb6SCC-pRMqFHtkZnxXtn65cPzCfmV6PCTp3zqUPlOXx4JmzMyEpP3F4emEcc-SwEPJ39GfLyH-4V-3DBPz7HRbEzXislpyxvJw-0QKJG-h7um51MtPMwmhF82003H4feFwfHJeNSNT2eTzMAPK87I2pWUCXlbiNxliC-ciklojgxJiigEXKR0zdlypLmxdRIoQEK6l-_VFc8ceyYtESCIKwTdYHCo8KG1EvRxzm-ppHT1qZ88weHfmjs8Kxy9akIhia-ZQ_a-mDX6l4gZ3yNtZ9nhOvrMpw37GhfXhzoB1w',
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

  embedContainer = 'embedContainer';

  eventHandlers = 
    new Map([
      ['loaded', () => console.log('Report loaded')],
      ['rendered', () => console.log('Report rendered')],
      //['error', (event) => console.log(event.detail)]
  ]);


}
