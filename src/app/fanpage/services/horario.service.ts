import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { Horario } from '../interfaces/horario.interface';
import { HorarioAPI } from '../interfaces/horario-api.interface';

import { FechasCursos } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  private http = inject(HttpClient);

  getCourseBasic(): Observable<Horario> {
    return this.http.get<HorarioAPI[]>(`${environment.URL_API_BACK_FANPAGE_HORARIO}/basic`).pipe(
      map((h) => {
        if (!h || h.length === 0) {
          throw new Error('No se encontro informacion de horarios');
        }

        const { inicio , fin }= h[0] ?? {};
        if (!inicio || !fin) {
          throw new Error('No se encontro completa la informacion de horarios');
        }
        return {
          inicio,fin
        }
      }),
      catchError((err) => {
        console.warn('API error in getCourseBasic, using fallback: ', err);
        return of({
          inicio: FechasCursos.fechaCursoBasico.INICIO,
          fin: FechasCursos.fechaCursoBasico.FIN
        });
      })
    )
  }

  getCoursePerfec(): Observable<Horario> {
    return this.http.get<HorarioAPI[]>(`${environment.URL_API_BACK_FANPAGE_HORARIO}/perfec`).pipe(
      map((h) => {
        if (!h || h.length === 0) {
          throw new Error('No se encontro informacion de horarios');
        }

        const { inicio , fin }= h[0] ?? {};
        if (!inicio || !fin) {
          throw new Error('No se encontro completa la informacion de horarios');
        }
        return {
          inicio,fin
        }
      }),
      catchError((err) => {
        console.warn('API error in getCoursePerfec, using fallback: ', err);
        return of({
          inicio: FechasCursos.fechaCursoPerfeccionamiento.INICIO,
          fin: FechasCursos.fechaCursoPerfeccionamiento.FIN
        });
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
