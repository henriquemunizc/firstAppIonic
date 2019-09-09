export class PontoEletronicoModel {
  id: string;
  nome: string;
  matricula: string;
  data: DatasModel[];
}

export class DatasModel {
  dia: Date;
  diaDaSemana: Date;
  saldoGeral: Date;
  registros: RegistroModel[];
}

export class RegistroModel {
  entrada: Date;
  saida: Date;
  trabalhado: Date;
  observacao: string;
}
