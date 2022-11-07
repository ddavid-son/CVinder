import {Injectable} from "@angular/core";


@Injectable({providedIn: 'root'})
export class StorageService {

  setItem(key: string, value: any) {
    key = "cvinder_" + key;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Add failed. Cannot stringify value for storage');
    }
  }

  removeItem(key: string) {
    key = "cvinder_" + key;
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Remove failed.');
    }
  }

  getItem<T>(key: string): T | undefined {
    key = key ? "cvinder_" + key : key;
    if (!!key && !!localStorage?.getItem(key)) {
      return JSON?.parse(<string>localStorage?.getItem(key));
    }
    return undefined;
  }
}
