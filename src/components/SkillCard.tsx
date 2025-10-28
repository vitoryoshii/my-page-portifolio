import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SkillCard = ({ icon: Icon, title, description }: SkillCardProps) => {
  return (
    <Card className="group p-6 border-glow hover:border-glow-accent hover:glow-accent-effect transition-smooth">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="p-4 rounded-xl bg-gradient-cyber group-hover:bg-gradient-glow transition-smooth">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className="absolute inset-0 blur-xl opacity-50 bg-primary group-hover:bg-accent transition-smooth rounded-xl" />
        </div>

        <h3 className="text-lg font-semibold text-foreground group-hover:text-gradient-cyber transition-smooth">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default SkillCard;
