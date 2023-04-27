import { Component ,OnInit} from '@angular/core';
import {RuleServiceService} from '../rule-service.service';
import {Rule} from '../models/rule';
import { freeSet } from '@coreui/icons';

@Component({
  selector: 'app-rule-table',
  templateUrl: './rule-table.component.html',
  styleUrls: ['./rule-table.component.scss']
})
export class RuleTableComponent implements OnInit{

  rules?:Rule[];
  icons = freeSet ;
  grpedRules:any;

  constructor(private ruleService:RuleServiceService){

  }
  ngOnInit(): void {
    this.rules=this.ruleService.getRules();
    if(this.rules?.length){
      this.grpedRules=this.groupByType(this.rules);
      console.log(this.grpedRules);
      console.log(this.getRowSpan(1));
    }
  }

  groupByType(array:Rule[]){
    return array.reduce((r, a) => {
          r[a.rule_grp] = r[a.rule_grp] || [];
          r[a.rule_grp].push(a);
          return r;
      }, Object.create(null));
  }

  getRowSpan(grpNumber:number){
    return this.grpedRules[grpNumber].length;
  }

}
