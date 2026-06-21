
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

    let fixture: ComponentFixture<AppComponent>;
    let compiled: HTMLElement;
    let component : AppComponent


    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        compiled = fixture.nativeElement as HTMLElement;
        component=fixture.componentInstance;
    });

    it('should create the app', () => {

        expect(component).toBeTruthy();

    });

    it('shoud title = fanpagecefoesp',()=>{

        console.log(component.title);
        console.log(compiled);
        const title='fanpagecefoesp';

        expect(component.title).toBe(title);
        
    });

    it('should exist router-outlet',()=>{

        expect(compiled.querySelector('router-outlet')).not.toBeNull();

    })
});