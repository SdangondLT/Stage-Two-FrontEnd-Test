import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@shared/angular-material/index';
import { ArticleModel } from '@app-models/card-article.model';

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

export class CardComponent implements OnInit {

  isShowingAbstract: boolean;
  @Input() article: ArticleModel;
  @Output() editArticleEmitter =  new EventEmitter<number>();
  @Output() cancelEditingEmitter =  new EventEmitter<number>();
  @Output() deleteCardEmitter =  new EventEmitter<number>();

  cardForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.article = {
      id: 0,
      title: "",
      journal: "",
      abstract: "",
      isEditing: false
    }
    this.isShowingAbstract = true;
    this.cardForm = this.formBuilder.group({
      articles: this.formBuilder.array([]),
    });
  }

  ngOnInit(): void {
    this.cardForm = this.formBuilder.group({
      title: [''],
      journal: [''],
      abstract: ['']
    })
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

  deleteCard(){
    this.deleteCardEmitter.emit(this.article.id);
  }

  showAbstract(){
    this.isShowingAbstract = !this.isShowingAbstract;
  }
}
