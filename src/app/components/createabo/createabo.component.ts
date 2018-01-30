import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-createabo',
  templateUrl: './createabo.component.html',
  styleUrls: ['./createabo.component.css']
})
export class CreateaboComponent implements OnInit {

  constructor(private auth: AuthService) {
    auth.getNotCurrentLoggedIn();
  }

  ngOnInit() {
  }

}
