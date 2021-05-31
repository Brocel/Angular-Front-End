import { Component, OnInit } from '@angular/core';
import { UserService } from "@app/core/service/user.service";
import { UserImpl } from '@app/shared/model/implementation/user-impl';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: UserImpl[];

  constructor(private userService: UserService) {
    this.users = [];
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: UserImpl[]) => {
      console.log(data);
      this.users = data;
    });
  }

}
