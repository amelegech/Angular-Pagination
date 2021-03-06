import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './users.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  public myDetails: any;
  public usersDetail: any;
  constructor(private route: ActivatedRoute, private service: UsersService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let userEmail = params.get('email');
      console.log('user Email', userEmail);
      this.service.getAllUsers().subscribe((singlUser) => {
        console.log('singlUser', singlUser.results);
        this.usersDetail = singlUser.results.filter((data: any) => {
          if (data.email == userEmail) {
            return data.email;
          }
          
        });
        console.log('Filterd User', this.usersDetail);
        
      });
    });
  }
}
