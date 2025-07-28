import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable, tap } from 'rxjs';
import { Horario } from '../interfaces/horario.interface';
import { HorarioAPI } from '../interfaces/horario-api.interface';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  private http = inject(HttpClient);

  getCourseBasic(): Observable<Horario> {
    return this.http.get<HorarioAPI[]>(`${environment.URL_API_BACK_FANPAGE_HORARIO}/basic`).pipe(

      map((h) => {
        const curso = h[0];
        return {
          inicio: curso.inicio,
          fin: curso.fin
        }
      }))
  }

  getCoursePerfec(): Observable<Horario> {
    return this.http.get<HorarioAPI[]>(`${environment.URL_API_BACK_FANPAGE_HORARIO}/perfec`).pipe(

      map((h) => {
        const curso = h[0];
        return {
          inicio: curso.inicio,
          fin: curso.fin
        }
      })

    )
  }

  registerCourseBasic(horario: any): Observable<any> {

    const basic: Horario = {
      inicio: horario.inicioBasic,
      fin: horario.finBasic
    }
    return this.http.post<HorarioAPI[]>(`${environment.URL_API_BACK_FANPAGE_HORARIO}/basic`, basic);


  }

  registerCoursePerfec(horario: any):Observable<any> {

    const perfec: Horario = {
      inicio: horario.inicioPerfec,
      fin: horario.finPerfec
    }


    return this.http.post(`${environment.URL_API_BACK_FANPAGE_HORARIO}/perfec`, perfec);


  }
}
