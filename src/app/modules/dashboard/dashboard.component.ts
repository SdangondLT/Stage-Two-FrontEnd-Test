import { Component, OnInit } from '@angular/core';
import { ArticleModel, ArticleResponseModel } from '@app-models/card-article.model';
import Swal from 'sweetalert2';
import { ArticlesService } from '@app-services/articles.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})

export class DashboardComponent implements OnInit {
  articleList: ArticleModel[];
  editingArticle: ArticleModel;

  constructor(private service: ArticlesService) {
    this.articleList = [];
    this.editingArticle = {
      id: 0,
      title: "",
      journal: "",
      abstract: "",
      isEditing: false
    };
  }

  ngOnInit(): void {
    this.service.getArticles().subscribe(
      articleList => {
        this.articleList = articleList.response.docs.map((element: ArticleResponseModel, index: number) => {
          const payload = {
            id: index,
            title: element.title_display,
            journal: element.journal,
            abstract: element.abstract[0],
            isEditing: false
          }
          return Object.assign({}, payload);
        })
      }
    )
  }

  editArticle(index: number){
    this.articleList[index].isEditing = true;
    this.editingArticle = this.articleList[index];
  }

  addEditArticle(article: ArticleModel){
    console.log('article', article)
    this.articleList.splice(article.id, 1, article);
    this.articleList[article.id].isEditing = false;
  }

  cancelEditing(index: number){
    this.articleList[index].isEditing = false;
    this.editingArticle = {
      id: 0,
      title: '',
      journal: '',
      abstract: '',
      isEditing: false
    };
  }

  addArticle(payload: ArticleModel){
    const articleId = Object.assign(payload, {id: this.articleList.length})
    this.articleList.push(articleId);
    console.log('this.articleList', this.articleList)
  }

  deleteCard(index: number){
    this.articleList.splice(index, 1);
  }
}
