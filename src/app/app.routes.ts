import {Routes} from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {FormComponent} from './form/form.component';
import {VoteComponent} from './vote/vote.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {ParentComponent} from './parent/parent.component';
import {ParentDetailComponent} from './parent-detail/parent-detail.component';

export const Route: Routes = [
  {path: '', component: HomeComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'form', component: FormComponent},
  {path: 'vote', component: VoteComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'parent/:id', component: ParentDetailComponent},
  {path: 'notFound', component: NotFoundComponent},
  {path: '**', redirectTo: 'notFound'}
];
