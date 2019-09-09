import { PontoEletronicoModel } from './../models/ponto-eletronico.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrls } from '../api-urls';
import { Observable } from 'rxjs';




@Injectable()
export class PontoEletronicoService {
  listaPontoELetronico: PontoEletronicoModel[];
  constructor(
    private http: HttpClient
  ) { }

  getPontoEletronicoPorId(id: number): Observable<PontoEletronicoModel[]> {
    const url = ApiUrls.pontoEletronico.getPontoEletronicoPorId(id);
    return this.http.get<PontoEletronicoModel[]>(url);
  }

}
