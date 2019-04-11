import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import { Pokemon } from "./models/pokemon";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "pokemon-app";
  pokemon: Pokemon;
  constructor(private dataService: DataService) {}

  public ngOnInit() {
    this.dataService.getPokemon("pikachu").subscribe((item: Pokemon) => {
      this.pokemon = item;
    });
  }
}
