import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {RuleServiceService} from '../rule-service.service';

@Component({
  selector: 'app-rule-filter',
  templateUrl: './rule-filter.component.html',
  styleUrls: ['./rule-filter.component.scss']
})
export class RuleFilterComponent {

  ruleFilterForm = new FormGroup({
    country: new FormControl(),
    version: new FormControl(),
    category: new FormControl()
});

ruleFilterData:any=[];

arrRuleVersion:any=[];

arrCategory:any=[];

country:string="";

version:string="";

category:string="";

constructor(private ruleService:RuleServiceService){
  this.ruleFilterData=ruleService.getRuleFilter();

  if(this.ruleFilterData.length){
    this.country=this.ruleFilterData[0].ctrycd;
    this.changeCountry({"target":{"value":this.ruleFilterData[0].ctrycd}});
  }
}

changeCountry(event: any) { 
  this.arrRuleVersion = this.ruleFilterData.find(
    (cntry:any) => cntry.ctrycd == event.target.value
  ).version;
  this.country=event.target.value;
  this.version=this.arrRuleVersion[0].name;
  this.arrCategory=this.arrRuleVersion[0].category;
}

changeVersion(event: any) { 
  this.arrCategory = this.arrRuleVersion.find(
    (ver:any) => {
      return ver.name==event.target.value
    }
  ).category;
  this.version=event.target.value;
  this.category=this.arrCategory[0];
}


}
