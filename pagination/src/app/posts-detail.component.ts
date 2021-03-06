import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './users.service';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css']
})
export class PostsDetailComponent implements OnInit {
 public filterdPost :Array<any>=[]
  constructor(private activRoute :ActivatedRoute,private service :UsersService) { }

  ngOnInit(): void {
    this.activRoute.paramMap.subscribe((param)=>{
   
      let postID = param.get('id')
      console.log({postID});
      this.service.getPosts().subscribe((postItem)=>{
        console.log({postItem});
        
      this.filterdPost = postItem.filter((list:any)=>{
        if(list.id == postID){
          return list
        }
      })
      })
    })
  }

}
