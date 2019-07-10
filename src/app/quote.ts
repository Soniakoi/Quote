export class Quote {
  public showDetails:boolean;
  constructor (
    public id:number,
    public name:string,
    public description : string,
    public details:string,
    public user:string,
    public completeDate:Date){
    this.showDetails=false;
  }
}