import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news?: NewsModel
  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(){
    this.service.getNewsService().subscribe((data: NewsModel) => {
      this.news = data
    })
  }  
}
