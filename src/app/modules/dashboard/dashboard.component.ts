import { Component, OnInit } from '@angular/core';
import { CardArticleInterface } from 'src/app/models/card-article.model';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  articles: any = {};
  articleToEdit: CardArticleInterface;

  constructor(private service: ArticlesService) {
    this.articleToEdit = {
      title_display: "",
      journal: "",
      abstract: "",
      id: ""
    };
  }

  ngOnInit(): void {
    this.service.getArticles().subscribe(
      article => {this.articles = article.response.docs;
      console.log(this.articles);
    })
  }

  createCard(cardArticle: CardArticleInterface) {
    cardArticle.id = this.articles.length + 1;
    console.log(cardArticle);
    this.articles.unshift(cardArticle);
  }

  editCard(informationToEdit: any) {
    this.articleToEdit = {
      title_display: informationToEdit.title_display,
      journal: informationToEdit.journal,
      abstract: informationToEdit.abstract,
      id: informationToEdit.id
    };
    console.log(informationToEdit)
  }

  updateCard(informationToUpdate: CardArticleInterface) {
    let articleToFind: any;
    articleToFind = this.articles.find((item: any) => item.id === informationToUpdate.id )
    articleToFind.title_display = informationToUpdate.title_display;
    articleToFind.journal = informationToUpdate.journal;
    articleToFind.abstract = informationToUpdate.abstract;
    console.log(articleToFind)
  }
}
