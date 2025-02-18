import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Navigation() {
  const sections = [
    { id: "features", label: "Features" },
    { id: "demo", label: "Demo" },
    { id: "infographics", label: "How It Works" },
    { id: "technical", label: "Technical" },
    { id: "development", label: "Development" },
    { id: "future", label: "Future" }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav 
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Whisker Talk
          </h1>
          <div className="hidden md:flex space-x-4 overflow-x-auto">
            {sections.map(section => (
              <Button 
                key={section.id}
                variant="ghost"
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}