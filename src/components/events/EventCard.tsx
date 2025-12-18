import { Card, CardContent } from "@/components/ui/card";

interface EventCardProps {
  title: string;
  type: string;
  description: string;
  image: string;
  onClick?: () => void;
}

const EventCard = ({ title, type, description, image, onClick }: EventCardProps) => {
  return (
    <Card
      className="group overflow-hidden cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="inline-block bg-accent text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
            {type}
          </span>
          <h3 className="font-display text-xl md:text-2xl font-bold text-background mb-2">
            {title}
          </h3>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default EventCard;
