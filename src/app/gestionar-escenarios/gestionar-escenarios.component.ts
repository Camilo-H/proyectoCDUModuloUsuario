import { Component, OnInit } from '@angular/core';
import { Escenario } from './escenario';
import { EscenarioService } from './escenario.service';

@Component({
  selector: 'app-gestionar-escenarios',
  templateUrl: './gestionar-escenarios.component.html',
  styleUrls: ['./gestionar-escenarios.component.css']
})
export class GestionarEscenariosComponent implements OnInit {

  categoria: Escenario[] = [];

  constructor(private escenarioservise: EscenarioService) { }
  ngOnInit(): void {
    this.escenarioservise.getAll().subscribe(
      e => {this.categoria = e; console.log(this.categoria) }
    );
  }

}
