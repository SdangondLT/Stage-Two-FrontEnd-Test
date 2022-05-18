import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@shared/angular-material/index';
import { ArticleModel } from '@app-models/card-article.model';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
  animations: [
    trigger('showHide', [
      state('show', style({
        transform: 'translateY(0)',
        opacity: 1,
        flex: '100'
      })),
      state('hide', style({
        transform: 'translateY(-100%)',
        opacity: 0,
      })),
      transition('* => *', [animate('1s')])
    ])
  ]
})

export class CardComponent implements OnChanges {

  article: ArticleModel;
  // isShowingAbstract: boolean;
  @Input() articleList: ArticleModel[];
  @Output() editArticleEmitter =  new EventEmitter<number>();
  @Output() showAbstractEmitter =  new EventEmitter<number>();
  @Output() addEditArticleEmitter =  new EventEmitter<ArticleModel>();
  @Output() cancelEditingEmitter =  new EventEmitter<number>();
  @Output() deleteCardEmitter =  new EventEmitter<number>();

  cardForm: FormGroup;

  constructor(private fb: FormBuilder) {

    //this.isShowingAbstract = true;

    this.cardForm = this.fb.group({
      articles: this.fb.array([]),
    });
  }

  get getArticles() {
    return this.cardForm.get('articles') as FormArray;
  }

  addCard(data: ArticleModel){
    return this.fb.group({
      title: [data.title],
      journal: [data.journal],
      abstract: [data.abstract]
    });
  }

  ngOnInit(): void{
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['articleList'].currentValue){
      this.articleList = changes['articleList'].currentValue;
      this.getArticles.clear();
      this.articleList.forEach((article) => {
        this.getArticles.push(this.addCard(article))
      })
    }
  }

  getImageSource(index: number){
    return this.articleList[index].journal.toLowerCase().includes("plos one") ? "assets/img/plos-one.png" : "assets/img/not_found.png"
  }

  editArticle(index: number){
    this.editArticleEmitter.emit(index);
  }

  addEditArticle(index: number){
    this.article = {
      id: index,
      title: this.getArticles.at(index).value.title,
      journal: this.getArticles.at(index).value.journal,
      abstract: this.getArticles.at(index).value.abstract,
      isEditing: false,
      isShowingAbstract: false,
    }
    this.addEditArticleEmitter.emit(this.article);
  }

  cancelEdit(index: number){
    this.cancelEditingEmitter.emit(index);
  }

  deleteCard(index: number){
    this.getArticles.removeAt(index);
    this.deleteCardEmitter.emit(index);
  }

  showAbstract(index: number){
    this.showAbstractEmitter.emit(index);
  }
}
