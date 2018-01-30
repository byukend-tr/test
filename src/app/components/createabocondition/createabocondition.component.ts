import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-createabocondition',
  templateUrl: './createabocondition.component.html',
  styleUrls: ['./createabocondition.component.css']
})
export class CreateaboconditionComponent implements OnInit {

  constructor(private auth: AuthService) {
    auth.getNotCurrentLoggedIn();
  }

  ngOnInit() {
  }

}
