import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './components/authors/authors.component';
import { BooksComponent } from './components/books/books.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [

  {path: "news", component: NewsComponent},
  {path: "authors", component: AuthorsComponent},
  {path: "books", component: BooksComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
