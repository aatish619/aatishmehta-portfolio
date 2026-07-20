import { FlowNode } from './flow-node';
import { FlowArrow } from './flow-arrow';

export function AuthenticationDiagram() {
  return (
    <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      {/* Client Side */}
      <FlowNode x={50} y={50} width={250} height={300} label="Mobile Client" variant="outline" delay={0.1} />
      <FlowNode x={100} y={100} width={150} height={60} label="Auth Repository" variant="primary" delay={0.2} />
      <FlowNode x={100} y={200} width={150} height={60} label="Secure Keychain" sublabel="Tokens Encrypted" variant="secondary" delay={0.3} />
      
      <FlowArrow startX={175} startY={160} endX={175} endY={200} delay={0.4} />
      
      {/* Server Side */}
      <FlowNode x={500} y={50} width={250} height={300} label="Authentication Server" variant="outline" delay={0.5} />
      <FlowNode x={550} y={100} width={150} height={60} label="OAuth / JWT Provider" variant="default" delay={0.6} />
      <FlowNode x={550} y={200} width={150} height={60} label="User Database" variant="secondary" delay={0.7} />

      <FlowArrow startX={625} startY={160} endX={625} endY={200} delay={0.8} />

      {/* Cross Communication */}
      <FlowArrow startX={250} startY={120} endX={550} endY={120} delay={0.9} />
      <text x={400} y={110} textAnchor="middle" fill="hsl(var(--muted-foreground))" className="text-[10px]" opacity={0}>
        <animate attributeName="opacity" values="0;1" begin="1.2s" dur="0.5s" fill="freeze" />
        1. Login Request
      </text>

      <FlowArrow startX={550} startY={140} endX={250} endY={140} delay={1.1} dashed />
      <text x={400} y={155} textAnchor="middle" fill="hsl(var(--primary))" className="text-[10px]" opacity={0}>
        <animate attributeName="opacity" values="0;1" begin="1.4s" dur="0.5s" fill="freeze" />
        2. Access & Refresh Tokens
      </text>
    </svg>
  );
}
