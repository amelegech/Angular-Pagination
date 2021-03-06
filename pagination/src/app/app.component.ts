import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'pagination';
  // public allUsers: Array<any> = [];
  // public totalUsers: any
  // public page: number = 1;
  
  constructor(private service: UsersService) {
    // this.allUsers = new Array<any>()
  }
  userListHandler() {


    // this.service.getAllUsers().subscribe((res) => {
    //   console.log('users respons', res);
    //   this.allUsers = res.results;
    //   this.totalUsers = res.results.length;
    //   console.log('Total Number of Users: ', this.totalUsers);
    // });
  }
 
  ngOnInit(): void {
  //   this.service.getAllUsers().subscribe((res) => {
  //     console.log('users respons', res);
  //     this.allUsers = res.results;
  //     this.totalUsers = res.results.length;
  //     console.log('Total Number of Users: ', this.totalUsers);
  //   });
  // }
}
}
