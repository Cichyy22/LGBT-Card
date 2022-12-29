import { Pronouce } from "./pronouce.model";

export class PronouceService{
  private pronouce: Pronouce;

  getPronouce(){
    return this.pronouce;
  }

  addPro(pronouce: Pronouce){
    this.pronouce= pronouce;
  }

}
