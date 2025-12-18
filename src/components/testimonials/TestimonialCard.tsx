import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({ name, role, content, rating, image }: TestimonialCardProps) => {
  return (
    <Card className="border-0 shadow-lg bg-card h-full">
      <CardContent className="p-8 flex flex-col h-full">
        <Quote className="text-accent/30 w-12 h-12 mb-4" />
        <p className="text-foreground leading-relaxed flex-1 mb-6 italic">
          "{content}"
        </p>
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "text-accent fill-accent" : "text-muted"}
            />
          ))}
        </div>
        <div className="flex items-center gap-4">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <span className="text-accent font-bold text-lg">
                {name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-muted-foreground text-sm">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
