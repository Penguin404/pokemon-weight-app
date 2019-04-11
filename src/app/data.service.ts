import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pokemon } from "./models/pokemon";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class DataService {
  url = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) {}

  public getPokemon(name: string):Observable<any> {
    return this.http.get(this.url + name);
  }
}
