import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiagramOptionService {

  options:any={
    layout: {
    hierarchical: {
      direction: "LR",
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

  constructor() { }

  getDiagramOption(){
    return this.options;
  }

}
