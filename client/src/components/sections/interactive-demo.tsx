import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function InteractiveDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSound, setCurrentSound] = useState("meow");

  const soundEffects = [
    { id: "meow", label: "Hungry Meow", translation: "I'm hungry!" },
    { id: "purr", label: "Happy Purr", translation: "I'm content" },
    { id: "chirp", label: "Excited Chirp", translation: "I see something interesting!" },
  ];

  return (
    <section id="demo" className="scroll-mt-16 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Interactive Demo</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Try Cat Sound Translation</h3>
              <div className="grid grid-cols-1 gap-4">
                {soundEffects.map((sound) => (
                  <Card key={sound.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{sound.label}</h4>
                        <p className="text-sm text-muted-foreground">{sound.translation}</p>
                      </div>
                      <Button
                        variant={currentSound === sound.id && isPlaying ? "secondary" : "outline"}
                        size="icon"
                        onClick={() => {
                          setCurrentSound(sound.id);
                          setIsPlaying(!isPlaying);
                        }}
                      >
                        {currentSound === sound.id && isPlaying ? (
                          <VolumeX className="h-4 w-4" />
                        ) : (
                          <Volume2 className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg" />
            <Card className="p-6 bg-background/80 backdrop-blur-sm">
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">Real-time Analysis</h3>
                <div className="space-y-4">
                  <div className="h-40 bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Waveform Visualization</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">Current Analysis:</p>
                    <p className="text-muted-foreground">
                      {isPlaying ? "Analyzing sound pattern..." : "Waiting for input..."}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
