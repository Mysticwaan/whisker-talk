import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ImageCard } from "@/components/ui/image-card";

export function Development() {
  const stages = [
    { title: "Data Collection & Analysis", description: "Gathering comprehensive vocalization data" },
    { title: "AI Model Development", description: "Training neural networks for pattern recognition" },
    { title: "Hardware Prototyping", description: "Iterative device design and testing" },
    { title: "Software Integration", description: "Unified system development" },
    { title: "User Testing", description: "Real-world validation and refinement" }
  ];

  return (
    <section id="development" className="scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Development Process</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{stage.title}</h3>
                    <p className="text-muted-foreground">{stage.description}</p>
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
            className="space-y-6"
          >
            <ImageCard
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
              alt="Development Process"
              className="w-full h-48 object-cover"
            />
            <ImageCard
              src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107"
              alt="Neural Network"
              className="w-full h-48 object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
