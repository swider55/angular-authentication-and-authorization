import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { signal } from "@angular/core";
import { UserInterface } from "./user.interface";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from "./auth.service";

class MockUserService {
  currentUserSig = signal<UserInterface | undefined | null>(undefined);
};

describe('AppComponent', () => {
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<AppComponent>;
  let comp: AppComponent

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent, HttpClientTestingModule, RouterTestingModule],
      providers: [{ provide: AuthService, useClass: MockUserService }]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  })

  afterEach(() => {
    httpTestingController.verify();
    localStorage.clear()
  });

  describe('ngOnInit', () => {
    it('should call HttpClient.get if token is present', () => {
      const token = 'fake-token';
      localStorage.setItem('token', token);
      fixture.detectChanges();
      const req = httpTestingController.expectOne({ method: 'GET', url:'https://api.realworld.io/api/user'});
    });

    it('should not call HttpClient.get if token not present', () => {
      fixture.detectChanges();
      const req = httpTestingController.expectNone('');

    });
  })
})
