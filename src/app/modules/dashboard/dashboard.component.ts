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

  constructor(private service: ArticlesService) { }

  ngOnInit(): void {
    console.log("entro a ngOnInit");
    this.service.getArticles().subscribe(
      article => {this.articles = article.response.docs;
      console.log(this.articles);
    })
  }

  createCard(cardArticle: CardArticleInterface) {
    this.articles.push(cardArticle);

  }
}
