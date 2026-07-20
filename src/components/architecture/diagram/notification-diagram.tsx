import { FlowNode } from './flow-node';
import { FlowArrow } from './flow-arrow';

export function NotificationDiagram() {
  return (
    <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <FlowNode x={50} y={170} width={150} height={60} label="Internal Service" sublabel="Triggers Event" variant="default" delay={0.1} />
      
      <FlowArrow startX={200} startY={200} endX={300} endY={200} delay={0.3} />
      
      <FlowNode x={300} y={50} width={200} height={300} label="Notification Pipeline" variant="outline" delay={0.4} />
      <FlowNode x={325} y={120} width={150} height={60} label="Redis Queue" variant="secondary" delay={0.5} />
      <FlowNode x={325} y={220} width={150} height={60} label="Push Worker Node" variant="primary" delay={0.6} />

      <FlowArrow startX={400} startY={180} endX={400} endY={220} delay={0.7} />

      <FlowArrow startX={475} startY={250} endX={600} endY={250} delay={0.8} />

      <FlowNode x={600} y={120} width={150} height={60} label="APNs / FCM" sublabel="Apple & Google" variant="default" delay={0.9} />
      <FlowNode x={600} y={220} width={150} height={60} label="Mobile Device" sublabel="Receives Push" variant="secondary" delay={1.0} />

      <FlowArrow startX={675} startY={180} endX={675} endY={220} delay={1.1} dashed />
      
      <text x={250} y={190} textAnchor="middle" fill="hsl(var(--muted-foreground))" className="text-[10px]" opacity={0}>
         <animate attributeName="opacity" values="0;1" begin="0.8s" dur="0.5s" fill="freeze" />
         Push Event
      </text>
    </svg>
  );
}
