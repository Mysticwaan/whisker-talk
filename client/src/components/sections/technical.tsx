import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageCard } from "@/components/ui/image-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Technical() {
  return (
    <section id="technical" className="scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Technical Details
        </h2>

        <Tabs defaultValue="hardware" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="hardware" className="data-[state=active]:bg-primary/20 transition-colors">
              Hardware Components
            </TabsTrigger>
            <TabsTrigger value="software" className="data-[state=active]:bg-primary/20 transition-colors">
              Software Stack
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hardware" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  {
                    title: "Custom-designed wearable device",
                    description: "Advanced sensor integration with comfort-first design"
                  },
                  {
                    title: "Integrated microphone array",
                    description: "High-fidelity audio capture system"
                  },
                  {
                    title: "ESP32 microcontroller",
                    description: "Powerful processing with low power consumption"
                  }
                ].map((item, index) => (
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
                        <CardHeader>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground">
                          {item.description}
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ImageCard
                  src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960"
                  alt="Tech Interface"
                  className="h-full object-cover"
                />
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="software" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ImageCard
                  src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1"
                  alt="AI Interface"
                  className="h-full object-cover"
                />
              </motion.div>
              <div className="space-y-4">
                {[
                  {
                    title: "Python & TensorFlow",
                    description: "Core AI/ML processing engine"
                  },
                  {
                    title: "PyTorch",
                    description: "Advanced audio processing capabilities"
                  },
                  {
                    title: "Flutter Mobile App",
                    description: "Cross-platform user interface"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
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
                        <CardHeader>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground">
                          {item.description}
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
}