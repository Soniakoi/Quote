import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,' Mind over matter. ',' ~Moritmer J.adler','Aisa',new Date(2019,0,15)),
    new Quote(2,' Not all counted truly counts. Not all that counts, is counted. ',' ~Albert Einstein','Jemmy',new Date(2019,1,12)),
    new Quote(3,' Every moment is a fresh beginning. ',' ~T.S Eliot','Jamz',new Date(2019,1,28)),
    new Quote(4,' Everything you’ve ever wanted is on the other side of fear. ',' ~George Addair','Jamila',new Date(2019,2,10)),
  ]

  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.unshift(quote)
  }
  
  removeQuote(isRemove,index){
    if(isRemove){
      let toRemove=confirm(`This quote will be removed!  ${this.quotes[index].name}`)

      if(toRemove){
        this.quotes.splice(index,1);
      }
      
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
