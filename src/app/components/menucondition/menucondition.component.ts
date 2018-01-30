import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-menucondition',
  templateUrl: './menucondition.component.html',
  styleUrls: ['./menucondition.component.css']
})
export class MenuconditionComponent implements OnInit {

  constructor(private auth: AuthService) {
    auth.getNotCurrentLoggedIn();
  }


  ngOnInit() {
  }

}
