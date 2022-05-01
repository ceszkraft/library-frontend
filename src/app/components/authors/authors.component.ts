import { Component, OnInit } from '@angular/core';
import { AuthorsModel } from 'src/app/models/authors';
import { AuthorsService } from 'src/app/services/authors/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors?: AuthorsModel[]
  author: AuthorsModel = {
    id: 0,
    name: '',
    nacionality: ''
  }

  constructor(private service: AuthorsService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.service.getUserServiceFake().subscribe((data: AuthorsModel[]) => {
      console.log(data);
      this.authors = data
      
    })
  }
  
  getUserById(id: number){
    this.service.getUserByIdService(id).subscribe((id: AuthorsModel) => {
      console.log(this.author = id)
    })
  }

  postUser(user: AuthorsModel){
    this.service.postUserService(user)
    .subscribe((userObj: AuthorsModel) => {
      this.author = userObj
      this.getUsers()
    })
  }

  putUser(){
    return this.service.putUserService(this.author)
    .subscribe((res: any) =>{
      console.log(res);
      this.getUsers()
      
    })
  }

  deleteUser(id: number){
   this.service.deleteUserService(id).subscribe(res => {
     console.log(res);
     this.getUsers()
   }) 
  }
  
}

