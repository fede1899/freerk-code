import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
  title = 'La pagina';
  emailContacto: string;
  
  /**
   * trayendo un valor del local storage y mostrandolo
     automaticamente cuando este cambia gracias al doCheck
   */
  ngDoCheck(): void {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngOnInit(): void {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

}
