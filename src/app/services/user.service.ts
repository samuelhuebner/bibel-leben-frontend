import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { bl19personOwn } from '../models/bl.models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private angularFirestore: AngularFirestore,
    private authService: AuthService
  ) { }

  public async updateUserData(data: bl19personOwn, uid?: string): Promise<void> {
    const UID = data.UID || uid;
    const path = `users/u_default_groups/own_data/${UID}`;

    const personDocument = this.angularFirestore.doc<bl19personOwn>(path);

    delete data.UID;
    try {
      await personDocument.update(data);
      await this.authService.downloadUserData(UID);
    } catch (error) {
      if (environment.debug) {
        console.log('user-service: error while updating user-data');
        console.error(error);
      }
    }
  }
}
