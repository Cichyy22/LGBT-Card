export class Pronouce{
  public message: string;
  public pronouces_good: Array<any>;
  public pronouces_neutral: Array<any>;
  public names: Array<any>;
  public sexuality: Array<any>;
  public selectedWords1: Array<any>;
  public selectedWords2: Array<any>;
  public selectedWords3: Array<any>;
  public selectedWords4: Array<any>;
  public s_identity: number;
  public s_expression: number;
  public s_orientation: number;
  public s_drive: number;
  public s_desire: number;
  public s_attitude: number;
  public s_exploration: number;


  // public links: Array<any>

  constructor(message: string, pronouces_good: Array<any>, pronouces_neutral: Array<any>, names: Array<any>, sexuality: Array<any>, selectedWords1: Array<any>,selectedWords2: Array<any>,selectedWords3: Array<any>,selectedWords4: Array<any>){
    this.message = message;
    this.pronouces_good= pronouces_good;
    this.pronouces_neutral=pronouces_neutral;
    this.names=names;
    this.sexuality=sexuality;
    this.selectedWords1=selectedWords1;
    this.selectedWords2=selectedWords2;
    this.selectedWords3=selectedWords3;
    this.selectedWords4=selectedWords4;
  }
}

