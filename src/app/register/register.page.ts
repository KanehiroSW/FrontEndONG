import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  phone: string = '';
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onRegister() {
    console.log('Phone:', this.phone);
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    // Aquí puedes agregar la lógica para enviar los datos del formulario
    // Ejemplo: llamar a un servicio para registrar al usuario

    this.router.navigate(['/alert']); // Redirige a otra página después del registro
  }

  goToLogin() {
    this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
  }
}
