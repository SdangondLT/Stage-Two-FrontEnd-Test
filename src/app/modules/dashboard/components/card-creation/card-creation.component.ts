import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CardArticleInterface } from 'src/app/models/card-article.model';

@Component({
  selector: 'app-card-creation',
  templateUrl: './card-creation.component.html',
  styleUrls: ['./card-creation.component.sass']
})
export class CardCreationComponent implements OnInit, OnChanges {

  @Output() createCardEmitter = new EventEmitter<CardArticleInterface>();
  @Output() updateCardEmitter = new EventEmitter<CardArticleInterface>();
  @Input() cardArticle: CardArticleInterface = {
    title_display: "",
    journal: "",
    abstract : "",
    id: "",
    isEdit: false,
    showAbstract: true
  };

  constructor() {
    this.cardArticle = {
      title_display: "",
      journal: "",
      abstract : "",
      id: "",
      isEdit: false,
      showAbstract: true
    };
   }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  createCard(){
    this.createCardEmitter.emit(this.cardArticle);
  }

  updateCard(){
    this.updateCardEmitter.emit(this.cardArticle);
  }
}
