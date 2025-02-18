import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ImageCard } from "@/components/ui/image-card";
import { ArrowDownCircle } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative">
      <motion.div 
        className="grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Understanding Your Cat Like Never Before
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Experience groundbreaking AI technology that bridges the communication gap 
            between you and your feline companion. Discover what your cat is really saying.
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="group"
            >
              Explore Features
              <ArrowDownCircle className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="col-span-2"
          >
            <ImageCard
              src="https://images.unsplash.com/photo-1486475494674-f5f2c82f3c74"
              alt="Tech Cat"
              className="h-[300px] object-cover"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ImageCard
              src="https://images.unsplash.com/photo-1484557052118-f32bd25b45b5"
              alt="Smart Device"
              className="h-[200px] object-cover"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ImageCard
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
              alt="AI Interface"
              className="h-[200px] object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-bounce"
        >
          <ArrowDownCircle className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  );
}