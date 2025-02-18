import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ImageCard } from "@/components/ui/image-card";
import { Mic, Brain, Radio, Database, Smartphone, ArrowRight } from "lucide-react";

export function Features() {
  const features = [
    { 
      icon: <Mic className="h-6 w-6" />, 
      title: "Real-time vocalization analysis",
      description: "Advanced audio processing for instant cat communication interpretation"
    },
    { 
      icon: <Brain className="h-6 w-6" />, 
      title: "Behavioral pattern recognition",
      description: "AI-powered analysis of your cat's unique behavioral patterns"
    },
    { 
      icon: <Radio className="h-6 w-6" />, 
      title: "Custom wearable device",
      description: "Comfortable, lightweight design for continuous monitoring"
    },
    { 
      icon: <Database className="h-6 w-6" />, 
      title: "Multi-modal data processing",
      description: "Comprehensive analysis combining audio, motion, and behavioral data"
    },
    { 
      icon: <Smartphone className="h-6 w-6" />, 
      title: "User-friendly mobile interface",
      description: "Intuitive app design for real-time insights and notifications"
    }
  ];

  return (
    <section id="features" className="scroll-mt-16 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Key Features</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Discover how Whisker Talk revolutionizes pet communication with cutting-edge technology
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {feature.description}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6 sticky top-24"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageCard
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e"
                alt="Wearable Device"
                className="w-full aspect-[4/3] object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageCard
                src="https://images.unsplash.com/photo-1494256997604-768d1f608cac"
                alt="Smart Pet Tech"
                className="w-full aspect-[4/3] object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute top-0 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    </section>
  );
}