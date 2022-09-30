import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-reactives',
  templateUrl: './reactives.component.html',
  styleUrls: ['./reactives.component.css']
})
export class ReactivesComponent implements OnInit {

  forma:FormGroup;
  constructor(private fb: FormBuilder) { 
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['',[Validators.required, Validators.minLength(5)]],
      correo: ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      direccion:this.fb.group({
        distrito:['',Validators.required],
        ciudad: ['',Validators.required]
      })
    });
  }

  ngOnInit(): void {
    
  }

  get nombreNoValido(){
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched
  }

  get apellidoNoValido(){
    return this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched
  }

  get correoNoValido(){
    return this.forma.get('correo')?.invalid && this.forma.get('correo')?.touched
  }
  

  guardar(){
    console.log(this.forma)
    if(this.forma.invalid){
      Object.values(this.forma.controls).forEach(control =>{
        control.markAsTouched();
      })
      return;
    }
  }

}
