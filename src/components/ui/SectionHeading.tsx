interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) => {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12 md:mb-16`}>
      {subtitle && (
        <span className="inline-block text-accent font-medium text-sm tracking-widest uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold ${light ? "text-background" : "text-foreground"} mb-4`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg ${light ? "text-background/80" : "text-muted-foreground"} leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
