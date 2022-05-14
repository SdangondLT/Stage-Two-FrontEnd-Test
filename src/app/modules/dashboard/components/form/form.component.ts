import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ArticleModel, ArticleResponseModel } from 'src/app/models/card-article.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit, OnChanges {
  articleTitle: string;
  articleJournal: string;
  articleAbstract: string;
  changeBtn: boolean;

  @Input() editingArticle: ArticleModel;
  @Output() addArticleEmitter = new EventEmitter<ArticleModel>();

  constructor() {
    this.editingArticle = {
      id: 0,
      title: '',
      journal: '',
      abstract: '',
      isEditing: false
    }
    this.articleTitle = '';
    this.articleJournal = '';
    this.articleAbstract = '';
    this.changeBtn = false;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges", changes)
    const data = changes['editingArticle'].currentValue;
    if(data){
      this.articleTitle = data.title;
      this.articleJournal = data.journal;
      this.articleAbstract = data.abstract;
      this.changeBtn = data.isEditing;
    }
  }

  addArticle(){
    const payload ={
      id: 0,
      title: this.articleTitle,
      journal: this.articleJournal,
      abstract: this.articleAbstract,
      isEditing: false
    }
    this.addArticleEmitter.emit(payload);
    this.articleTitle = '';
    this.articleJournal = '';
    this.articleAbstract = '';
  }
}
