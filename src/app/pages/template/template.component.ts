import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  //https://restcountries.com/v2/lang/es
  usuario={
    nombre: 'Boris',
    apellido:'Avila',
    correo:'borisavila539@gmail.com',
    pais:'HND',
    genero: 'M'
  }

  paises: any[] =[];
  constructor(private paisService: PaisService) { }

  
  ngOnInit(): void {
    this.paisService.getPaises().subscribe(paises =>{
      this.paises = paises;
      
    });
  }
  
  guardar(form: NgForm){
    
    if(form.invalid){
      Object.values(form.controls).forEach(control=>{
        control.markAsTouched()
      })
      return;
    }

    console.log(form)
    console.log(form.value)
  }

}
