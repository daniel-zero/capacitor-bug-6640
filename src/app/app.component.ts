import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CapacitorCookies } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    CapacitorCookies.setCookie({
      key: 'test',
      value: 'test',
      url: 'https://www.google.com',
    });
  }
}
