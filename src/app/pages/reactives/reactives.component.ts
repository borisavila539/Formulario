import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouteConfigLoadEnd } from '@angular/router';
import { ValidadoresService } from 'src/app/services/validadores.service';

@Component({
  selector: 'app-reactives',
  templateUrl: './reactives.component.html',
  styleUrls: ['./reactives.component.css']
})
export class ReactivesComponent implements OnInit {

  forma:FormGroup;

  constructor(private fb: FormBuilder, private validadores: ValidadoresService) { 
    

    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['',[Validators.required, this.validadores.noHerrera, Validators.minLength(5)]],
      correo: ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      usuario: ['',,this.validadores.existeUsuario],
      pass1: ['',[Validators.required]],
      pass2: ['',[Validators.required]],
      direccion:this.fb.group({
        distrito:['',Validators.required],
        ciudad: ['',Validators.required]
      }),
      pasatiempos: this.fb.array([])
    },{
      validators: this.validadores.passwordsIguales('pass1','pass2')
    });
    this.cargarDataAlFormulario();


  }

  ngOnInit(): void {
    
  }

  get nombreNoValido(){
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched;
  }

  get apellidoNoValido(){
    return this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched;
  }

  get correoNoValido(){
    return this.forma.get('correo')?.invalid && this.forma.get('correo')?.touched;
  }

  get usuarioNoValido(){
    return this.forma.get('usuario')?.invalid && this.forma.get('usuario')?.touched;
  }

  get distritoNoValido(){
    return this.forma.get('direccion.distrito')?.invalid && this.forma.get('direccion.distrito')?.touched;
  }

  get ciudadNoValido(){
    return this.forma.get('direccion.ciudad')?.invalid && this.forma.get('direccion.ciudad')?.touched;
  }

  get pasatiempos(){
    return this.forma.get('pasatiempos') as FormArray;
  }

  get pass1NoValido(){
    return this.forma.get('pass1')?.invalid && this.forma.get('pass1')?.touched;
  }

  get pass2NoValido(){
    const pass1 = this.forma.get('pass1')?.value;
    const pass2 = this.forma.get('pass2')?.value;
    if(pass1 === pass2)
      return false;
    else
      return true;
  }
  

  guardar(){
    console.log(this.forma)

    if(this.forma.invalid){
      Object.values(this.forma.controls).forEach(control =>{

        if(control instanceof FormGroup){
          Object.values(control.controls).forEach(control => control.markAsTouched());
        }else{
          control.markAsTouched();
        }
        
      })
      return;
    }
  }

  cargarDataAlFormulario(){
    this.forma.reset({
      nombre: 'Boris',
      apellido:'Avila',
      correo: 'borisavila539@gmail.com',
      usuario:'',
      pass1:'123',
      pass2:'123',
      direccion:{
        distrito: 'Intermoda',
        ciudad:'SPS'
      }
    });
    ['Comer','Dormir','Correr'].forEach(valor => this.pasatiempos.push(this.fb.control(valor)))
  }
  agregarPasatiempo(){
    this.pasatiempos.push(this.fb.control(''))
  }

  borrarPasatiempo(i:number){
    this.pasatiempos.removeAt(i);
  }

}
