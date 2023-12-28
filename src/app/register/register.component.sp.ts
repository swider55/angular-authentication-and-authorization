// import { HttpClient } from '@angular/common/http';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ReactiveFormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
// import { RegisterComponent } from './register.component';
// import { AuthService } from '../auth.service';
// import { of } from 'rxjs';

// describe('RegisterComponent', () => {
//   let component: RegisterComponent;
//   let fixture: ComponentFixture<RegisterComponent>;
//   let mockHttpClient: jest.Mocked<HttpClient>;
//   let mockAuthService: jest.Mocked<AuthService>;
//   let mockRouter: jest.Mocked<Router>;

//   beforeEach(async () => {
//     mockHttpClient = {
//       post: jest.fn()
//     } as unknown as jest.Mocked<HttpClient>;
//     mockAuthService = {
//       currentUserSig: { set: jest.fn() }
//     } as unknown as jest.Mocked<AuthService>;
//     mockRouter = {
//       navigateByUrl: jest.fn()
//     } as unknown as jest.Mocked<Router>;

//     await TestBed.configureTestingModule({
//       declarations: [ RegisterComponent ],
//       imports: [ ReactiveFormsModule ],
//       providers: [
//         { provide: HttpClient, useValue: mockHttpClient },
//         { provide: AuthService, useValue: mockAuthService },
//         { provide: Router, useValue: mockRouter }
//       ]
//     }).compileComponents();

//     fixture = TestBed.createComponent(RegisterComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should have a valid form with username, email, and password', () => {
//     component.form.controls['username'].setValue('testuser');
//     component.form.controls['email'].setValue('test@example.com');
//     component.form.controls['password'].setValue('password123');
//     expect(component.form.valid).toBeTruthy();
//   });

//   it('should call onSubmit and navigate on valid form submission', async () => {
//     const response = {user: {token: 'fake-token'}};
//     mockHttpClient.post.mockReturnValue(of(response));

//     component.form.controls['username'].setValue('testuser');
//     component.form.controls['email'].setValue('test@example.com');
//     component.form.controls['password'].setValue('password123');

//     await component.onSubmit();

//     expect(mockHttpClient.post).toHaveBeenCalledTimes(1);
//     expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/');
//   });
// });
