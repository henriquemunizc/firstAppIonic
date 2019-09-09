import { environment } from '../environments/environment';


const pontoEletronicoHost = environment.jsonServerHost;



export const ApiUrls = {

  pontoEletronico: {
    getPontoEletronicoPorId(id: number): string {
      return pontoEletronicoHost + 'pontoEletronico/' + id + '/';
    }
  }
};
