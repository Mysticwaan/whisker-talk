import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageCard({ src, alt, className }: ImageCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <AspectRatio ratio={16 / 9}>
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full rounded-md"
          loading="lazy"
        />
      </AspectRatio>
    </Card>
  );
}
