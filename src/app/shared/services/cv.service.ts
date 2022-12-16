import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {getMyCVUrl} from "../constants/general.constants";
import {CV} from "../models/cv.models";

@Injectable({providedIn: 'root'})
export class CvService{

  constructor(private http:HttpClient) {}

  fetchCV() {
    return this.http.get<CV>(getMyCVUrl)
  }
}
