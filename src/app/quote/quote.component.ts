import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,' Any fool can write code that a computer can understand. Good programmers write code that humans can understand ',' ~Martin Fowler','Sonia',new Date(2019,4,7)),
    new Quote(2,'Give a man a program, frustrate him for a day,Teach a man to program, frustrate him for a lifetime ',' ~Muhammad Waseem','Koi',new Date(2019,4,7)),
    new Quote(3,' Accept yourself,Ypu dont have to prove sh*t to anyone except yourself ',' ~Aubrey Graham aka Drake','Wangui',new Date(2019,4,7)),
    new Quote(4,' Everything you’ve ever wanted is on the other side of fear. ',' ~George Addair','Habamba',new Date(2019,4,7)),
  ]

  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
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
