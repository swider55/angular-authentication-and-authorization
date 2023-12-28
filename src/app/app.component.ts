import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from './user.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  authService = inject(AuthService);
  http = inject(HttpClient);

  ngOnInit(): void {
    if(localStorage.getItem('token')) {
      this.http.get<{user: UserInterface}>('https://api.realworld.io/api/user').subscribe({
        next: (response)=>{
          this.authService.currentUserSig.set(response.user)
        }
      })
    }
  }

  logout(): void{
    localStorage.setItem('token', '');
    this.authService.currentUserSig.set(null);
  }
}
