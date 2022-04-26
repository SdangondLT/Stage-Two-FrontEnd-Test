import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CardArticleInterface } from 'src/app/models/card-article.model';

@Component({
  selector: 'app-card-creation',
  templateUrl: './card-creation.component.html',
  styleUrls: ['./card-creation.component.sass']
})
export class CardCreationComponent implements OnInit {
  cardArticle: CardArticleInterface;

  @Output() createCardEmitter = new EventEmitter<CardArticleInterface>();

  constructor() {
    this.cardArticle = {
      title: "",
      journal: "",
      abstract : ""
    };
   }

  ngOnInit(): void {
  }

  createCard (){
    this.createCardEmitter.emit(this.cardArticle);
  }

}
