import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class AppstorageService {

  constructor(private storage: Storage) { this.initializeApp();}
  // Save data to Local Storage
async saveData(key: string, value: any): Promise<void> {
  await this.storage.set(key, value);
}

// Retrieve data from Local Storage
async getData(key: string): Promise<any> {
  const data = await this.storage.get(key);
  return data;
}

// Remove data
async removeData(key: string): Promise<void> {
  await this.storage.remove(key);
}

async initializeApp() {
  await this.storage.create(); // Ensure the database is created
  // Continue with other app initialization code
}

}
