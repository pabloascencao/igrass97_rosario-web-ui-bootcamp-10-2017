export class Movie {
  
  id: number = null;
  year: number = null;
  duration: number = null;
  title: string = null;

  constructor(obj = { id: null, year: null, duration: null, title: null}){
    this.id = obj.id;
    this.year = obj.year;
    this.duration = obj.duration;
    this.title = obj.title;
  }
}