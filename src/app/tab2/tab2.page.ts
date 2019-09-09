import { Component, OnInit } from '@angular/core';
import { PontoEletronicoModel } from '../models/ponto-eletronico.model';
import { PontoEletronicoService } from '../services/ponto-eletronico.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  registrosPontoEletronico: PontoEletronicoModel[] = [];
  registrosPontoEletronico$: Observable<PontoEletronicoModel[]>;
  id: number;
  constructor(
    private pontoEletronicoService: PontoEletronicoService
  ) { }


  ngOnInit(): void {
    this.id = 1;
    console.log('Aqui');
    this.carregarRegistros(this.id);
  }

  carregarRegistros(id: number) {
    this.pontoEletronicoService.getPontoEletronicoPorId(id).subscribe(
      registros => {
        this.registrosPontoEletronico = registros;

        console.log(this.registrosPontoEletronico);
        console.log(registros);
      });
  }

  // carregarRegistros(id: number) {
  //   this.registrosPontoEletronico$ = this.pontoEletronicoService.getPontoEletronicoPorId(id);
  // }

}
