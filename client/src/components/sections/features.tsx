import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ImageCard } from "@/components/ui/image-card";
import { 
  Thermometer, 
  Heart, 
  Activity, 
  Scale, 
  Wind, 
  Navigation, 
  Monitor 
} from "lucide-react";

export function Features() {
  const features = [
    { 
      icon: <Thermometer className="h-6 w-6" />, 
      title: "Temperature Monitoring", 
      description: "Non-contact infrared temperature measurement for patient safety" 
    },
    { 
      icon: <Heart className="h-6 w-6" />, 
      title: "Vital Signs Tracking",
      description: "Continuous monitoring of heart rate and SpO2 levels" 
    },
    { 
      icon: <Activity className="h-6 w-6" />, 
      title: "Blood Pressure Analysis",
      description: "Automated blood pressure measurement and tracking" 
    },
    { 
      icon: <Scale className="h-6 w-6" />, 
      title: "Weight & BMI Calculation",
      description: "Precise weight monitoring with instant BMI calculations" 
    },
    { 
      icon: <Wind className="h-6 w-6" />, 
      title: "Environmental Monitoring",
      description: "Real-time air quality and environmental assessment" 
    },
    { 
      icon: <Navigation className="h-6 w-6" />, 
      title: "LiDAR Navigation",
      description: "Advanced mobility with precise spatial awareness" 
    },
    { 
      icon: <Monitor className="h-6 w-6" />, 
      title: "Interactive Interface",
      description: "User-friendly display for patient interaction" 
    }
  ];

  return (
    <section id="features" className="scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-blue-500 to-cyan-500 bg-clip-text text-transparent">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
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
                  whileHover={{ scale: 1.02 }}
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
            className="space-y-4 sticky top-24"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageCard
                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634"
                alt="Medical Monitoring"
                className="w-full"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageCard
                src="https://images.unsplash.com/photo-1666214280133-c53dd04f0f46"
                alt="Healthcare Robot"
                className="w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}