import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageCard } from "@/components/ui/image-card";

export function Future() {
  const developments = [
    {
      title: "Expanded vocalization database",
      description: "Growing our understanding of cat communication patterns"
    },
    {
      title: "Enhanced emotion detection",
      description: "More nuanced understanding of feline emotional states"
    },
    {
      title: "Real-time translation improvements",
      description: "Faster and more accurate vocalization analysis"
    },
    {
      title: "Cross-species adaptation",
      description: "Extending the technology to other companion animals"
    }
  ];

  return (
    <section id="future" className="scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Future Developments</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ImageCard
              src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f"
              alt="Future Tech"
              className="w-full h-96 object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {developments.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
