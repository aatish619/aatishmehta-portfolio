import { DiagramType } from '@/data/architecture';
import { LayerDiagram } from './layer-diagram';
import { AuthenticationDiagram } from './authentication-diagram';
import { NotificationDiagram } from './notification-diagram';

export function ArchitectureDiagram({ type }: { type: DiagramType }) {
  switch (type) {
    case 'layer':
      return <LayerDiagram />;
    case 'authentication':
      return <AuthenticationDiagram />;
    case 'notification':
      return <NotificationDiagram />;
    case 'flow':
    default:
      return (
        <div className="flex h-full w-full items-center justify-center bg-card/50 text-muted-foreground border border-dashed border-border/50 rounded-xl">
          Generic Flow Diagram Placeholder
        </div>
      );
  }
}
