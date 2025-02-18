import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageCard } from "@/components/ui/image-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cpu, Code, Workflow, Database } from "lucide-react";

export function Technical() {
  const hardwareComponents = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Custom-designed wearable device",
      description: "Advanced sensor integration with comfort-first design, featuring state-of-the-art microphone array and motion sensors"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "ESP32 microcontroller",
      description: "Powerful processing with low power consumption, enabling real-time data analysis and wireless communication"
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Integrated microphone array",
      description: "High-fidelity audio capture system with noise cancellation and directional sound processing"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "On-device storage",
      description: "Local data caching and processing for offline functionality and privacy protection"
    }
  ];

  return (
    <section id="technical" className="scroll-mt-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Technical Details</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Explore the cutting-edge technology powering Whisker Talk
        </p>

        <Tabs defaultValue="hardware" className="w-full">
          <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto mb-8">
            <TabsTrigger value="hardware" className="text-sm md:text-base">
              Hardware
            </TabsTrigger>
            <TabsTrigger value="software" className="text-sm md:text-base">
              Software
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hardware" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {hardwareComponents.map((component, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="group hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            {component.icon}
                          </div>
                          <CardTitle className="group-hover:text-primary transition-colors">
                            {component.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{component.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="sticky top-24 space-y-6"
              >
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <ImageCard
                    src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960"
                    alt="Tech Interface"
                    className="aspect-[4/3] object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="software" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <ImageCard
                    src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1"
                    alt="AI Interface"
                    className="aspect-[4/3] object-cover"
                  />
                </motion.div>
              </motion.div>

              <div className="space-y-6">
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      Python & TensorFlow
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Advanced machine learning models for real-time audio processing and pattern recognition,
                      optimized for edge devices
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      PyTorch
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Deep learning framework for neural network training and deployment,
                      specializing in audio signal processing
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      Flutter Mobile App
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Cross-platform mobile application with real-time updates, intuitive visualization,
                      and seamless device integration
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    </section>
  );
}