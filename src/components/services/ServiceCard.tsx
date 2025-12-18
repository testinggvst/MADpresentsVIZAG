import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card">
      <CardContent className="p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
          <Icon size={32} />
        </div>
        <h3 className="font-display text-xl font-bold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
