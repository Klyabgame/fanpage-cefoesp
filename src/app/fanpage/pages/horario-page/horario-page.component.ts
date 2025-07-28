import { Component, inject } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { HorarioService } from '../../services/horario.service';

@Component({
  selector: 'app-horario-page',
  imports: [ReactiveFormsModule],
  templateUrl: './horario-page.component.html',
  styles: ``
})
export class HorarioPageComponent {

  private horarioService=inject(HorarioService);
  private fb= inject(FormBuilder);

  myFormBasic:FormGroup= this.fb.group({
    inicioBasic:[ '' , Validators.required ],
    finBasic:[ '' , Validators.required ]
  });

  myFormPerfec:FormGroup= this.fb.group({
    inicioPerfec:[ '' , Validators.required ],
    finPerfec:[ '' , Validators.required ]
  });

  onSubmitCourseBasic(){
    
      return this.horarioService.registerCourseBasic(this.myFormBasic.value).subscribe();
  }

  onSubmitCoursePerfec(){
      this.horarioService.registerCoursePerfec(this.myFormPerfec.value).subscribe();
  }

}
