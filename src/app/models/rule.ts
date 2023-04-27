export class Rule {

    cntrycd: string;
    rule_cfgname: string;
    rule_cfgcatgry: string;
    rule_grp: number;
    rule_seq: number;
    rule: string;
    rule_type:string;
    succes_grp:number;
    fail_grp:number;
    version: string;
    
    constructor(cntrycd: string, rule_cfgname: string, rule_cfgcatgry:string, rule_grp: number,rule_seq:number,rule:string,rule_type:string,success_grp:number,fail_grp:number,version:string) {
        this.cntrycd=cntrycd;
        this.rule_cfgname=rule_cfgname;
        this.rule_cfgcatgry=rule_cfgcatgry;
        this.rule_grp=rule_grp;
        this.rule_seq=rule_seq;
        this.rule=rule;
        this.rule_type=rule_type;
        this.succes_grp=success_grp;
        this.fail_grp=fail_grp;
        this.version=version;
      }
}
