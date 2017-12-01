import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  title = 'Contacto';
  emailContacto: string;

  ngOnInit(): void {
    console.log("contact.component cargadoo!!")
  }
/**
 * guardo informacion en el localStorage
 */
  guardarEmail(){
    localStorage.setItem('emailContacto', this.emailContacto);//se guarda en localstorage

  }

}