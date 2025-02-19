import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ImageCard } from "@/components/ui/image-card";
import { ArrowDownCircle, Bot, Heart, Activity } from "lucide-react";

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
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            The Future of Healthcare Automation
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Experience revolutionary healthcare technology that combines robotics and 
            autonomous systems for streamlined medical checks and patient care.
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
              src="https://images.unsplash.com/photo-1657299170950-87e5b0eaf77c"
              alt="Medical Robot"
              className="h-[300px] object-cover"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ImageCard
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514"
              alt="Healthcare Technology"
              className="h-[200px] object-cover"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ImageCard
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
              alt="Medical Interface"
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

      {/* Floating Icons Animation */}
      <motion.div 
        className="absolute top-20 right-10 text-primary/20"
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Bot className="h-16 w-16" />
      </motion.div>
      <motion.div 
        className="absolute bottom-20 left-10 text-primary/20"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Heart className="h-12 w-12" />
      </motion.div>
      <motion.div 
        className="absolute top-40 left-20 text-primary/20"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Activity className="h-10 w-10" />
      </motion.div>
    </section>
  );
}