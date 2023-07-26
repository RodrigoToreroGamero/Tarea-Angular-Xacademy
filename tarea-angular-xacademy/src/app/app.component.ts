import { Component, OnInit } from '@angular/core';

type Product = {
  name: string;
  price: number;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tarea-angular-xacademy';

  listIsVisible: boolean = true;
  textOnHiddenList: string = "Mostrar lista";
  textOnVisibleList: string = "Ocultar lista";
  textListState: string = "";

  ShowOrHideList(): void {
    this.listIsVisible = !this.listIsVisible;
    if(this.listIsVisible) {
      this.textListState = this.textOnVisibleList;
    }
    else {
      this.textListState = this.textOnHiddenList;
    }
  }

  ngOnInit(): void {
    this.ShowOrHideList();
  }

  products: Product[] = [
    { name: "Lapicero", price: 6.5 },
    { name: "Cuaderno", price: 10 },
    { name: "Regla", price: 3 },
    { name: "Pegamento", price: 1.5 },
    { name: "Tijeras", price: 4 },
    { name: "Cartuchera", price: 13.5 },
  ];
}
