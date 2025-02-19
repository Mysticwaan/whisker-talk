import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ImageCard } from "@/components/ui/image-card";
import { Mic, Brain, Radio, Database, Smartphone } from "lucide-react";

export function Features() {
  const features = [
    { icon: <Mic className="h-6 w-6" />, title: "Real-time vocalization analysis", 
      description: "Advanced audio processing for instant cat communication interpretation" },
    { icon: <Brain className="h-6 w-6" />, title: "Behavioral pattern recognition",
      description: "AI-powered analysis of feline behavior patterns" },
    { icon: <Radio className="h-6 w-6" />, title: "Custom wearable device integration",
      description: "Seamless connection with our specialized pet wearables" },
    { icon: <Database className="h-6 w-6" />, title: "Multi-modal data processing",
      description: "Comprehensive analysis of audio, visual, and behavioral data" },
    { icon: <Smartphone className="h-6 w-6" />, title: "User-friendly mobile interface",
      description: "Intuitive mobile app for real-time insights" }
  ];

  return (
    <section id="features" className="scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, backgroundColor: "var(--primary-light)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Card className="overflow-hidden transition-colors hover:bg-primary/5">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="p-2 bg-primary/10 rounded-lg text-primary"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {feature.icon}
                        </motion.div>
                        <div>
                          <h3 className="font-semibold mb-1">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageCard
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e"
                alt="Wearable Device"
                className="w-full"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageCard
                src="https://images.unsplash.com/photo-1494256997604-768d1f608cac"
                alt="Smart Pet Tech"
                className="w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}