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
        <h2 className="text-3xl font-bold text-center mb-12">Technical Details</h2>

        <Tabs defaultValue="hardware" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="hardware">Hardware Components</TabsTrigger>
            <TabsTrigger value="software">Software Stack</TabsTrigger>
          </TabsList>

          <TabsContent value="hardware" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Custom-designed wearable device</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Advanced sensor integration with comfort-first design
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Integrated microphone array</CardTitle>
                  </CardHeader>
                  <CardContent>
                    High-fidelity audio capture system
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>ESP32 microcontroller</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Powerful processing with low power consumption
                  </CardContent>
                </Card>
              </div>
              <ImageCard
                src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960"
                alt="Tech Interface"
                className="h-full object-cover"
              />
            </div>
          </TabsContent>

          <TabsContent value="software" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <ImageCard
                src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1"
                alt="AI Interface"
                className="h-full object-cover"
              />
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Python & TensorFlow</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Core AI/ML processing engine
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>PyTorch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Advanced audio processing capabilities
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Flutter Mobile App</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Cross-platform user interface
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
}
