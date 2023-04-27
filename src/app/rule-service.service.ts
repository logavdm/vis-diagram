import { Injectable } from '@angular/core';
import {Rule} from './models/rule';

@Injectable({
  providedIn: 'root'
})
export class RuleServiceService {
  Rules:Rule[]=[];

  RuleFilter:any;

  constructor(){
    
    for (let index = 1; index < 4; index++) {      
      let rule:Rule=Object.assign(new Rule('IN','VPP_PMYTYPE_DERIVE_00'+index.toString(),'PMYTYPE_DERIVE',1,index,'true','D',0,2,'0.0.4'));
      this.Rules.push(rule);
    }

    for (let index = 1; index < 3; index++) {      
      let rule:Rule=Object.assign(new Rule('IN','ECAS_PMYTYPE_DERIVE_00'+index.toString(),'PMYTYPE_DERIVE',2,index,'true','D',0,3,'0.0.4'));
      this.Rules.push(rule);
    }

    for (let index = 1; index < 3; index++) {      
      let rule:Rule=Object.assign(new Rule('IN','PROXY_PMYTYPE_DERIVE_00'+index.toString(),'PMYTYPE_DERIVE',3,index,'true','D',0,0,'0.0.4'));
      this.Rules.push(rule);
    }
    this.RuleFilter=[{"ctrycd":"IN","version":[{"name":"0.0.4","category":["TPSYS_DERIVE"]},{"name":"0.0.3","category":["PMYTYPE_DERIVATOR","TPSYS_DERIVE"]},{"name":"0.0.2","category":["PMYTYPE_DERIVATOR","TPSYS_DERIVE"]},{"name":"0.0.1","category":["PMYTYPE_DERIVATOR","TPSYS_DERIVE"]}]},
    {"ctrycd":"SG","version":[{"name":"0.0.3","category":["SG_003_PMYTYPE_DERIVATOR","SG_003_TPSYS_DERIVE"]},{"name":"0.0.2","category":["SG_002_PMYTYPE_DERIVATOR","SG_002_TPSYS_DERIVE"]},{"name":"0.0.1","category":["SG_001_PMYTYPE_DERIVATOR","SG_001_TPSYS_DERIVE"]}]}]
  }
   


  getRules():Rule[]{
    return this.Rules;
  }

  clearRules():void{
    this.Rules=[];
  }

  getRuleFilter():any{
    return this.RuleFilter;
  }


}
