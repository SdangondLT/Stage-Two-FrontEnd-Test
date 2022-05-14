export interface ArticleModel {
  id: number;
  title: string;
  journal: string;
  abstract: string;
  isEditing: boolean;
}

export interface ArticleResponseModel {
  abstract: string[];
  article_type: string;
  author_display: string[];
  eissn: string;
  id: string;
  journal: string;
  publication_date: string;
  score: number;
  title_display: string;
}
