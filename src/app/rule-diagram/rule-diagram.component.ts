import { Component, AfterViewInit,ElementRef,Inject, ViewChild,OnInit,HostListener } from '@angular/core';
import { Network, DataSet } from 'vis';
import { freeSet } from '@coreui/icons';
import { DOCUMENT } from '@angular/common';
import {DiagramOptionService} from '../diagram-option.service';

import {FormGroup, FormControl, FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-rule-diagram',
  templateUrl: './rule-diagram.component.html',
  styleUrls: ['./rule-diagram.component.scss']
})
export class RuleDiagramComponent implements AfterViewInit,OnInit  {

  @ViewChild("mynetwork", { static: false }) el?: ElementRef;
  private networkInstance: any;
  icons = freeSet ;
  zoomstep = 0.3;
  fullScreenToggle:boolean=false;

  ruleSeqForm: FormGroup;

  arrows:any={success:{to: { enabled: true, type: "normal", color: "green" }},
              fail:{to: { enabled: true, type: "normal", color: "red" }},
              normal:{to: { enabled: true, type: "normal" } }};

  direction:string="LR";

  options:any={
    layout: {
    hierarchical: {
      direction: this.direction,
      sortMethod: "directed",
    },
  },
  physics: { enabled: true},
  edges: { smooth: false },
  interaction: {
    dragNodes: false,
    dragView: true,
    selectable: true,
    selectConnectedEdges: true,
    hover: true,
    hoverConnectedEdges: true,
    zoomView: true,
  },
  nodes: {
    shape: "box",
  },
  height:"200px"
};

  elem:any;

  constructor(@Inject(DOCUMENT) private document: any,private fb:FormBuilder) {
    this.ruleSeqForm = this.fb.group({
      ruleSeq: this.fb.array([this.newRuleSeq()]) ,
    });
  }

  ngOnInit() {
    this.elem = document.getElementById('networkbody');;
  }
 

  ngAfterViewInit() {
    this.drawTool();
 }

 get ruleSeq():FormArray{
  return this.ruleSeqForm?.get('ruleSeq') as FormArray;
 }
 
newRuleSeq(): FormGroup {

  let ruleSeqNumber=1;

  if(this.ruleSeq){
    ruleSeqNumber=this.ruleSeq.length;
  }
  console.log(ruleSeqNumber);

  return this.fb.group({
    seq: [ruleSeqNumber],
    seq_name: ['CFG_VPP_RULE_001'],
    success_grp:[0],
    failed_grp:[0],
    rule_type:['D'],
    rule:['']
  })
}

public addRuleSeqFormGroup() {
  const ruleSeq = this.ruleSeqForm.get('ruleSeq') as FormArray
  ruleSeq.push(this.newRuleSeq())
}

public removeRuleSeq(index:number) {
  this.ruleSeq.removeAt(index);
}


 
onSubmit() {
  console.log(this.ruleSeqForm.value);
}


async drawTool ()  {

  if (this.el) {

    if(this.networkInstance){
      this.networkInstance.destroy();
      this.networkInstance=null;
    }

    const container = this.el.nativeElement;
    const nodes = new DataSet<any>([
       {id: 1, label: 'Node 1'},
       {id: 2, label: 'Node 2'},
       {id: 3, label: 'Node 3'},
       {id: 4, label: 'Node 4'},
       {id: 5, label: 'Node 5'}
   ]);
   const edges = new DataSet<any>([
       {from: 1, to: 3,arrows:this.arrows.normal},
       {from: 1, to: 2},
       {from: 2, to: 4},
       {from: 2, to: 5}
   ]);
   const data = { nodes, edges };
   this.networkInstance = new Network(container, data,this.options);
   this.fitToScreen();
  }
}

changeDirection(direction:string){
  if(this.direction!=direction){
    this.direction=direction;
    this.options.layout.hierarchical.direction=this.direction;
    this.drawTool();
  }
}

moveLeft(){
  let currentPosition=this.networkInstance.getViewPosition();
  this.networkInstance.moveTo({position:{x:currentPosition.x+50,y:currentPosition.y}});
}

moveRight(){
  let currentPosition=this.networkInstance.getViewPosition();
  this.networkInstance.moveTo({position:{x:currentPosition.x-50,y:currentPosition.y}});
}

moveUp(){
  let currentPosition=this.networkInstance.getViewPosition();
  this.networkInstance.moveTo({position:{x:currentPosition.x,y:currentPosition.y+50}});
}

moveDown(){
  let currentPosition=this.networkInstance.getViewPosition();
  this.networkInstance.moveTo({position:{x:currentPosition.x,y:currentPosition.y-50}});
}

zoomin() {
  this.networkInstance.moveTo({scale:this.networkInstance.getScale()+this.zoomstep});
}

zoomout() {
  if(this.networkInstance.getScale()>0 && this.networkInstance.getScale()-0.3>0)
  this.networkInstance.moveTo({scale:this.networkInstance.getScale()-this.zoomstep});
}

fitToScreen(){
  this.networkInstance.fit();
}

toggleFullScreen(){
  if(this.fullScreenToggle){
    this.exitFullScreen();
  }else{
    this.openFullscreen();
  }
}

openFullscreen() {
  if (this.elem.requestFullscreen) {
    this.elem.requestFullscreen();
  } else if (this.elem.mozRequestFullScreen) {
    this.elem.mozRequestFullScreen();
  } else if (this.elem.webkitRequestFullscreen) {
    this.elem.webkitRequestFullscreen();
  } else if (this.elem.msRequestFullscreen) {
    this.elem.msRequestFullscreen();
  }
}

exitFullScreen(){
  if (this.document.exitFullscreen) {
    this.document.exitFullscreen();
  } else if (this.elem.mozCancelFullScreen) {
    /* Firefox */
    this.document.mozCancelFullScreen();
  } else if (this.elem.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    this.document.webkitExitFullscreen();
  } else if (this.elem.msExitFullscreen) {
    /* IE/Edge */
    this.document.msExitFullscreen();
  }
}


closeFullscreen() {
  if (this.document.exitFullscreen) {
    this.document.exitFullscreen();
  } else if (this.document.mozCancelFullScreen) {
    /* Firefox */
    this.document.mozCancelFullScreen();
  } else if (this.document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    this.document.webkitExitFullscreen();
  } else if (this.document.msExitFullscreen) {
    /* IE/Edge */
    this.document.msExitFullscreen();
  }
}


@HostListener('document:fullscreenchange')
@HostListener('document:webkitfullscreenchange')
@HostListener('document:mozfullscreenchange')
@HostListener('document:MSFullscreenChange')
  fullScreenMode(){
    if(!this.fullScreenToggle){
      this.options.height="585px";
      this.drawTool();
      this.fullScreenToggle=true;
    }else{
      this.options.height="210px";
      this.drawTool();
      this.fullScreenToggle=false;
    }
  }

}
