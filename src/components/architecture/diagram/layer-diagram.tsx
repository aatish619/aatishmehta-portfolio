import { FlowNode } from './flow-node';
import { FlowArrow } from './flow-arrow';

export function LayerDiagram() {
  return (
    <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      {/* Presentation Layer */}
      <FlowNode x={50} y={50} width={200} height={300} label="Presentation Layer" sublabel="UI & State (BLoC)" variant="outline" delay={0.1} />
      <FlowNode x={75} y={120} width={150} height={60} label="Widgets / Views" variant="default" delay={0.2} />
      <FlowNode x={75} y={220} width={150} height={60} label="State Managers" variant="secondary" delay={0.3} />
      
      <FlowArrow startX={150} startY={180} endX={150} endY={220} delay={0.4} />

      {/* Domain Layer */}
      <FlowNode x={300} y={50} width={200} height={300} label="Domain Layer" sublabel="Business Logic" variant="outline" delay={0.5} />
      <FlowNode x={325} y={120} width={150} height={60} label="Use Cases" variant="primary" delay={0.6} />
      <FlowNode x={325} y={220} width={150} height={60} label="Entities & Repos" variant="default" delay={0.7} />

      <FlowArrow startX={225} startY={250} endX={325} endY={150} delay={0.8} dashed />
      <FlowArrow startX={400} startY={180} endX={400} endY={220} delay={0.9} />

      {/* Data Layer */}
      <FlowNode x={550} y={50} width={200} height={300} label="Data Layer" sublabel="External Interfaces" variant="outline" delay={1.0} />
      <FlowNode x={575} y={120} width={150} height={60} label="Repo Implementations" variant="secondary" delay={1.1} />
      <FlowNode x={575} y={220} width={150} height={60} label="Data Sources (API/DB)" variant="default" delay={1.2} />

      <FlowArrow startX={575} startY={150} endX={475} endY={250} delay={1.3} dashed />
      <FlowArrow startX={650} startY={180} endX={650} endY={220} delay={1.4} />
    </svg>
  );
}
