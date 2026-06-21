import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
import { HorarioService } from "./horario.service";
import { provideHttpClient } from '@angular/common/http';
import { Horario } from '../interfaces/horario.interface';
import { environment } from '../../../environments/environment';
import { FechasCursos } from '../../shared/utils';

const mockCourseBasicResponse: Horario[] = [
    {
        "inicio": "04-08-2025",
        "fin": "11-08-2025",
    }
]

const mockCoursePerfecResponse: Horario[] = [
    {
        "inicio": "13-08-2025",
        "fin": "16-08-2025",
    }
]

const expectedCourseBasic: Horario = {
    "inicio": "04-08-2025",
    "fin": "11-08-2025",
}



const expectedCoursePerfec: Horario = {
    "inicio": "13-08-2025",
    "fin": "16-08-2025",
}


const mockCourseBasic = {
    inicio: 'mock-inicio',
    fin: 'mock-fin'
}

const mockCoursePerfec = {
    inicio: 'mock2-inicio',
    fin: 'mock2-fin'
}


describe('horarioService', () => {
    let service: HorarioService;
    let httpMock: HttpTestingController

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(),
                provideHttpClientTesting()
            ]
        });
        service = TestBed.inject(HorarioService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {

        expect(service).toBeTruthy();
    });


    it('should inject http-client', () => {
        expect(service['http']).toBeTruthy();
    });

    it('should getCourseBasic', () => {

        service.getCourseBasic().subscribe(horario => {
            //expect(true).toBeFalse();
            expect(horario).toEqual(expectedCourseBasic);
        })

        const req = httpMock.expectOne(`${environment.URL_API_BACK_FANPAGE_HORARIO}/basic`);

        console.log(req);

        expect(req.request.method).toBe('GET');

        req.flush(mockCourseBasicResponse);

    });

    it('should return fallback when having an empty array - getCourseBasic', () => {

        service.getCourseBasic().subscribe((horario) => {
            expect(horario).toEqual({
                inicio: FechasCursos.fechaCursoBasico.INICIO,
                fin: FechasCursos.fechaCursoBasico.FIN
            });
        })

        const req = httpMock.expectOne(`${environment.URL_API_BACK_FANPAGE_HORARIO}/basic`);

        console.log(req);

        expect(req.request.method).toBe('GET');

        req.flush([]);

    });


    it('should return fallback if http request fails - getCourseBasic', () => {

        service.getCourseBasic().subscribe((horario) => {
            expect(horario).toEqual({
                inicio: FechasCursos.fechaCursoBasico.INICIO,
                fin: FechasCursos.fechaCursoBasico.FIN
            });
        })

        const req = httpMock.expectOne(`${environment.URL_API_BACK_FANPAGE_HORARIO}/basic`);


        expect(req.request.method).toBe('GET');

        req.flush(null, { status: 500, statusText: 'Internal Server Error' });

    });

    it('should map only the first element even if API returns many - getCourseBasic', () => {

        service.getCourseBasic().subscribe((h) => {
            expect(h).toEqual({
                "inicio": "04-08-2025",
                "fin": "11-08-2025",
            })
        })

        const req = httpMock.expectOne(`${environment.URL_API_BACK_FANPAGE_HORARIO}/basic`);


        expect(req.request.method).toBe('GET');

        req.flush([
            {
                "inicio": "04-08-2025",
                "fin": "11-08-2025",
            }, {
                "inicio": "03-08-2025",
                "fin": "11-08-2025",
            }
        ]);

    });

    it('should return fallback if first element misses required fields - getCourseBasic', () => {

        service.getCourseBasic().subscribe((horario) => {
            expect(horario).toEqual({
                inicio: FechasCursos.fechaCursoBasico.INICIO,
                fin: FechasCursos.fechaCursoBasico.FIN
            });
        })

        const req = httpMock.expectOne(`${environment.URL_API_BACK_FANPAGE_HORARIO}/basic`);


        expect(req.request.method).toBe('GET');

        req.flush([{ inicio: '04-08-2025' }])

    });



    it('should getCoursePerfec', () => {

        service.getCoursePerfec().subscribe(horario => {
            //expect(true).toBeFalse();
            expect(horario).toEqual(expectedCoursePerfec);
        })

        const req = httpMock.expectOne(`${environment.URL_API_BACK_FANPAGE_HORARIO}/perfec`);

        console.log(req);

        expect(req.request.method).toBe('GET');

        req.flush(mockCoursePerfecResponse);

    });

    it('should return fallback when having an empty array - getCoursePerfec', () => {

        service.getCoursePerfec().subscribe((horario) => {
            expect(horario).toEqual({
                inicio: FechasCursos.fechaCursoPerfeccionamiento.INICIO,
                fin: FechasCursos.fechaCursoPerfeccionamiento.FIN
            });
        })

        const req = httpMock.expectOne(`${environment.URL_API_BACK_FANPAGE_HORARIO}/perfec`);

        console.log(req);

        expect(req.request.method).toBe('GET');

        req.flush([]);

    });


    it('should return fallback if http request fails - getCoursePerfec', () => {

        service.getCoursePerfec().subscribe((horario) => {
            expect(horario).toEqual({
                inicio: FechasCursos.fechaCursoPerfeccionamiento.INICIO,
                fin: FechasCursos.fechaCursoPerfeccionamiento.FIN
            });
        })

        const req = httpMock.expectOne(`${environment.URL_API_BACK_FANPAGE_HORARIO}/perfec`);


        expect(req.request.method).toBe('GET');

        req.flush(null, { status: 500, statusText: 'Internal Server Error' });

    });

    it('should map only the first element even if API returns many - getCoursePerfec', () => {

        service.getCoursePerfec().subscribe((h) => {
            expect(h).toEqual({
                "inicio": "13-08-2025",
                "fin": "16-08-2025",
            })
        })

        const req = httpMock.expectOne(`${environment.URL_API_BACK_FANPAGE_HORARIO}/perfec`);


        expect(req.request.method).toBe('GET');

        req.flush([
            {
                "inicio": "13-08-2025",
                "fin": "16-08-2025",
            }, {
                "inicio": "03-08-2025",
                "fin": "11-08-2025",
            }
        ]);

    });

    it('should return fallback if first element misses required fields - getCoursePerfec', () => {

        service.getCoursePerfec().subscribe((horario) => {
            expect(horario).toEqual({
                inicio: FechasCursos.fechaCursoPerfeccionamiento.INICIO,
                fin: FechasCursos.fechaCursoPerfeccionamiento.FIN
            });
        })

        const req = httpMock.expectOne(`${environment.URL_API_BACK_FANPAGE_HORARIO}/perfec`);


        expect(req.request.method).toBe('GET');

        req.flush([{ inicio: '04-08-2025' }])

    });


    



})

