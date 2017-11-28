import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';


@Component({
    selector: 'parques',
    templateUrl: './parques.component.html',
})
export class ParquesComponent implements OnChanges, OnInit, OnDestroy {

    @Input() nombre: string;
    @Input("metros_cuadrados") metros: number;
    public vegetacion: string;
    public abierto: boolean;

    @Output() pasameLosDatos = new EventEmitter();

    constructor() {
        this.nombre = "parque natural para caballos";
        this.metros = 450;
        this.vegetacion = "alta";
        this.abierto = true;

    }

    /**
     * 
     * Este hook se va a ejecutar cada vez que una propiedad del component
        que indiquemos tenga algun cambio en su valor  
        @param changes changes tiene el objeto del componente con los valores de las propiedades que fueron 
        modificados, es decir, si modifico el nombre, va a contener el nombre anterior y el nuevo 
     */
    ngOnChanges(changes: SimpleChanges): void {
        console.log("hay cambios")
    }

    /**
     * este hook se ejecuta al cargar EL COMPONENTE, una vez, a diferencia del onChanges que se 
     * ejecuta cada vez que hay cambios en el componente.
     */
    ngOnInit() {
        console.log("metodo on init lanzado")
    }

    /**
     * Antes de que angular destruya el componente, va a ejectura el onDestroy
     * aca se pueden hacer cosas como variar las variables inicializadas por ejemplo
     */
    ngOnDestroy(): void {
        console.log("se va a eliminar el componente");
    }


    emitirEvento() {
        this.pasameLosDatos.emit({
            "nombre": this.nombre,
            "metros": this.metros,
            "vegetacion": this.vegetacion,
            "abierto": this.abierto
        })
    }

}
// @Input() le digo al component que el valor de la propiedad va a venir de afuera
//@Output cuando se haga el emit del evento va a retornar
// todos los datos cargados en las propiedades