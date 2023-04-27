import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers';
import { RuleTableComponent } from './rule-table/rule-table.component';
import { RuleDiagramComponent } from './rule-diagram/rule-diagram.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'diagram',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'diagram',
        component: RuleDiagramComponent,
        data: {
          title: 'Rule diagram'
        }
      },
      {
        path: 'rule-table',
        component: RuleTableComponent,
        data: {
          title: 'Rule table'
        }
      },
    ]
  },
  {path: '**', redirectTo: 'diagram'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
