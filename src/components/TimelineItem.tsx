import { Calendar } from "lucide-react";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  isLast?: boolean;
}

const TimelineItem = ({
  title,
  company,
  period,
  description,
  isLast = false,
}: TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-12">
      {!isLast && (
        <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
      )}

      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-cyber border-2 border-background glow-effect" />

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{period}</span>
        </div>

        <h3 className="text-xl font-bold text-foreground">{title}</h3>

        <p className="text-primary font-medium">{company}</p>

        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
