import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ImageCard } from "@/components/ui/image-card";

export function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Understanding Your Cat Like Never Before
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            An innovative AI system designed to comprehend and translate cat vocalizations 
            into human-understandable meanings.
          </p>
          <Button size="lg" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Features
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          <ImageCard
            src="https://images.unsplash.com/photo-1486475554424-2fa50cd59f18"
            alt="Tech Cat"
            className="col-span-2"
          />
          <ImageCard
            src="https://images.unsplash.com/photo-1484557052118-f32bd25b45b5"
            alt="Smart Device"
          />
          <ImageCard
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
            alt="AI Interface"
          />
        </motion.div>
      </div>
    </section>
  );
}
