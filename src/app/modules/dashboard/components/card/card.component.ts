import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleModel } from '@app-models/card-article.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() article: ArticleModel;
  @Output() editArticleEmitter =  new EventEmitter<number>();
  @Output() cancelEditingEmitter =  new EventEmitter<number>();

  constructor() {
    this.article = {
      id: 0,
      title: "",
      journal: "",
      abstract: "",
      isEditing: false
    }
  }

  ngOnInit(): void {
  }

  getImageSource(){
    return this.article.journal.toLowerCase().includes("plos one") ? "assets/img/plos-one.png" : "assets/img/not_found.png"
  }

  editArticle(){
    this.editArticleEmitter.emit(this.article.id);
  }

  cancelEdit(){
    this.cancelEditingEmitter.emit(this.article.id);
  }
}
