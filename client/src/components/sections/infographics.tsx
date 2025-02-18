import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";

export function Infographics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    { title: "Audio Capture", percentage: 85 },
    { title: "Signal Processing", percentage: 90 },
    { title: "Pattern Recognition", percentage: 75 },
    { title: "Emotion Analysis", percentage: 80 },
  ];

  return (
    <section id="infographics" className="scroll-mt-16 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-6">
            <CardContent>
              <h3 className="text-xl font-semibold mb-6">Processing Pipeline</h3>
              <div className="space-y-6" ref={ref}>
                {steps.map((step, index) => (
                  <div key={step.title} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{step.title}</span>
                      <span>{step.percentage}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: "0%" }}
                        animate={inView ? { width: `${step.percentage}%` } : { width: "0%" }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-4">Accuracy Metrics</h3>
                  <div className="relative h-40">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-32 h-32 rounded-full border-4 border-primary flex items-center justify-center"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <span className="text-2xl font-bold">92%</span>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
