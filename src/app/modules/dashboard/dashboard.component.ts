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
      abstract: ""
    };
  }

  ngOnInit(): void {
    this.service.getArticles().subscribe(
      article => {this.articles = article.response.docs;
      console.log(this.articles);
    })
  }

  createCard(cardArticle: CardArticleInterface) {
    console.log(cardArticle);
    this.articles.unshift(cardArticle);
  }

  editCard(informationToEdit: any) {
    this.articleToEdit = {
      title_display: informationToEdit.title_display,
      journal: informationToEdit.journal,
      abstract : informationToEdit.abstract
    };
    console.log(informationToEdit)
  }
}
