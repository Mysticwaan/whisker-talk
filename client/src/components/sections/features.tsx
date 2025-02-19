import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ImageCard } from "@/components/ui/image-card";
import { Mic, Brain, Radio, Database, Smartphone } from "lucide-react";

export function Features() {
  const features = [
    { icon: <Mic className="h-6 w-6" />, title: "Real-time vocalization analysis" },
    { icon: <Brain className="h-6 w-6" />, title: "Behavioral pattern recognition" },
    { icon: <Radio className="h-6 w-6" />, title: "Custom wearable device integration" },
    { icon: <Database className="h-6 w-6" />, title: "Multi-modal data processing" },
    { icon: <Smartphone className="h-6 w-6" />, title: "User-friendly mobile interface" }
  ];

  return (
    <section id="features" className="scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        
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
                <Card>
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold">{feature.title}</h3>
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
            className="space-y-4"
          >
            <ImageCard
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e"
              alt="Wearable Device"
              className="w-full"
            />
            <ImageCard
              src="https://images.unsplash.com/photo-1494256997604-768d1f608cac"
              alt="Smart Pet Tech"
              className="w-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
