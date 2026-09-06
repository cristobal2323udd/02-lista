import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonListHeader, IonItem, IonIcon, IonLabel, IonAvatar, IonThumbnail, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, person, chatbubbles, settings, star, trash } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonListHeader, IonItem, IonIcon, IonLabel, IonAvatar, IonThumbnail, IonItemSliding, IonItemOptions, IonItemOption],
})
export class HomePage {
  // En standalone los íconos se registran a mano con addIcons(...)
  constructor() {
    addIcons({ home, person, chatbubbles, settings, star, trash });
  }
}
