import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../shared/usuario.service';
@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  formulario?: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioServide: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.formulario = this.fb.group({
      nombres: [, [Validators.required, Validators.maxLength(40)]],
      apellidos: [, [Validators.required]],
      email: [, [Validators.required]],
      password: [, [Validators.required, Validators.minLength(2)]],
      rol: [, [Validators.required]]
    })
  }

  guardar(): void {
    const nuevoUsuario = this.formulario!.value;
    if (nuevoUsuario.rol == "1") {
      nuevoUsuario.rol = "LECTOR";
    } else {
      nuevoUsuario.rol = "ADMIN";
    }
    this.usuarioServide.nuevoUsuario(nuevoUsuario)
      .subscribe(response => {
        console.log(response);
      })
  }

}
