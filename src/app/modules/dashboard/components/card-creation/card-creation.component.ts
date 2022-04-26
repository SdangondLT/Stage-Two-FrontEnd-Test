import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardArticleInterface } from 'src/app/models/card-article.model';

@Component({
  selector: 'app-card-creation',
  templateUrl: './card-creation.component.html',
  styleUrls: ['./card-creation.component.sass']
})
export class CardCreationComponent implements OnInit {

  @Output() createCardEmitter = new EventEmitter<CardArticleInterface>();
  @Output() updateCardEmitter = new EventEmitter<CardArticleInterface>();
  @Input() cardArticle: CardArticleInterface = {
    title_display: "",
    journal: "",
    abstract : "",
    id: ""
  };

  constructor() {
    this.cardArticle = {
      title_display: "",
      journal: "",
      abstract : "",
      id: ""
    };
   }

  ngOnInit(): void {
  }

  createCard (){
    this.createCardEmitter.emit(this.cardArticle);
  }

  updateCard(){
    this.updateCardEmitter.emit(this.cardArticle);
  }
}
