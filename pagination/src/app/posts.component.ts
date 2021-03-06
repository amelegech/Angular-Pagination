import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 public allPosts:any
  constructor(private service : UsersService) { }

  ngOnInit():void {
  this.service.getPosts().subscribe((post)=>{
    this.allPosts = post
    console.log("postsssss", this.allPosts);
    
  })
  }

}
