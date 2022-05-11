import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { CardArticleInterface } from 'src/app/models/card-article.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

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
