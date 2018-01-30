import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Component
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Service
import { AuthService } from './services/auth.service';
// Guard
import { AuthGuard } from './guards/auth.guard';
import { BloodsearchComponent } from './components/bloodsearch/bloodsearch.component';
import { PasswordchangeComponent } from './components/passwordchange/passwordchange.component';
import { CreateaboComponent } from './components/createabo/createabo.component';
import { CreateaboconditionComponent } from './components/createabocondition/createabocondition.component';
import { CreateantibodyComponent } from './components/createantibody/createantibody.component';
import { CreateantibodyconditionComponent } from './components/createantibodycondition/createantibodycondition.component';
import { CreatepatientComponent } from './components/createpatient/createpatient.component';
import { CreatesalivaComponent } from './components/createsaliva/createsaliva.component';
import { CreatesalivaconditionComponent } from './components/createsalivacondition/createsalivacondition.component';
import { CreatetestComponent } from './components/createtest/createtest.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { ManageaboconditionComponent } from './components/manageabocondition/manageabocondition.component';
import { ManageantibodyconditionComponent } from './components/manageantibodycondition/manageantibodycondition.component';
import { ManagerelativesComponent } from './components/managerelatives/managerelatives.component';
import { ManagesalivaconditionComponent } from './components/managesalivacondition/managesalivacondition.component';
import { ManageusersComponent } from './components/manageusers/manageusers.component';
import { ManageconditionComponent } from './components/managecondition/managecondition.component';
import { ManagetestComponent } from './components/managetest/managetest.component';
import { ManageviewdetailComponent } from './components/manageviewdetail/manageviewdetail.component';
import { ResultComponent } from './components/result/result.component';
import { TestsearchComponent } from './components/testsearch/testsearch.component';
import { ViewabophenotypedetailComponent } from './components/viewabophenotypedetail/viewabophenotypedetail.component';
import { ViewantibodyphenotypedetailComponent } from './components/viewantibodyphenotypedetail/viewantibodyphenotypedetail.component';
import { ViewsalivaphenotypedetailComponent } from './components/viewsalivaphenotypedetail/viewsalivaphenotypedetail.component';
import { ViewdetailComponent } from './components/viewdetail/viewdetail.component';
import { MenuconditionComponent } from './components/menucondition/menucondition.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';

// Routes
export const router: Routes = [
  { path: '', component: BloodsearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'bloodsearch', component: BloodsearchComponent },
  { path: 'changepassword', component: PasswordchangeComponent },
  // {path: 'viewprofile', component: ViewProfileComponent},
  // {path: 'addWiki', component: AddWikiComponent},
  { path: 'bloodsearch', component: BloodsearchComponent },
  { path: 'testsearch', component: TestsearchComponent },
  { path: 'createpatient', component: CreatepatientComponent },
  { path: 'managerelative', component: ManagerelativesComponent },
  { path: 'viewdetail', component: ViewdetailComponent },
  // {path: 'menutest', component: MenutestComponent},     
  // {path: 'menuviewdetail', component: MenuviewdetailComponent},   
  { path: 'result', component: ResultComponent },
  { path: 'user', component: ManageusersComponent },
  // {path: 'viewuserprofile', component: ViewUserProfileComponent},
  { path: 'createuser', component: CreateuserComponent },
  { path: 'condition', component: MenuconditionComponent },    //****************** */
  { path: 'createabocondition', component: CreateaboconditionComponent },
  { path: 'createantibodycondition', component: CreateantibodyconditionComponent },
  { path: 'createsalivacondition', component: CreatesalivaconditionComponent },
]

// Config Firebase
export const firebaseConfig = {
  // apiKey: "AIzaSyDz_tQoTB14qDZWNYCUOrO1uP5IdDBM2BA",
  // authDomain: "testlogin-38601.firebaseapp.com",
  // databaseURL: "https://testlogin-38601.firebaseio.com",
  // projectId: "testlogin-38601",
  // storageBucket: "testlogin-38601.appspot.com",
  // messagingSenderId: "104938651314"
  // apiKey: "AIzaSyCVf0yObdOPt8gbOYZjEFzCQaOOmAKSX7Y",
  // authDomain: "bombay-c85f6.firebaseapp.com",
  // databaseURL: "https://bombay-c85f6.firebaseio.com",
  // projectId: "bombay-c85f6",
  // storageBucket: "bombay-c85f6.appspot.com",
  // messagingSenderId: "771447237444"

  /// test
  apiKey: "AIzaSyBMOISTWKMo3YLaEZ05kGbz68JjwPkEZpI",
    authDomain: "test-531a2.firebaseapp.com",
    databaseURL: "https://test-531a2.firebaseio.com",
    projectId: "test-531a2",
    storageBucket: "test-531a2.appspot.com",
    messagingSenderId: "56840288954"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    SignupComponent,
    BloodsearchComponent,
    PasswordchangeComponent,
    CreateaboComponent,
    CreateaboconditionComponent,
    CreateantibodyComponent,
    CreateantibodyconditionComponent,
    CreatepatientComponent,
    CreatesalivaComponent,
    CreatesalivaconditionComponent,
    CreatetestComponent,
    CreateuserComponent,
    ManageaboconditionComponent,
    ManageantibodyconditionComponent,
    ManagerelativesComponent,
    ManagesalivaconditionComponent,
    ManageusersComponent,
    ManageconditionComponent,
    ManagetestComponent,
    ManageviewdetailComponent,
    ResultComponent,
    TestsearchComponent,
    ViewabophenotypedetailComponent,
    ViewantibodyphenotypedetailComponent,
    ViewsalivaphenotypedetailComponent,
    ViewdetailComponent,
    MenuconditionComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(router),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [AuthService, AngularFireDatabase, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
