import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export function Navigation() {
  const sections = [
    { id: "features", label: "Features" },
    { id: "technical", label: "Technical" },
    { id: "development", label: "Development" },
    { id: "future", label: "Future" }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav 
      className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.h1 
            className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            MedicBot
          </motion.h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button 
                  variant="ghost"
                  onClick={() => scrollToSection(section.id)}
                  className="hover:bg-primary/10 transition-colors"
                >
                  {section.label}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {sections.map((section) => (
                    <Button
                      key={section.id}
                      variant="ghost"
                      onClick={() => {
                        scrollToSection(section.id);
                        document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                      }}
                    >
                      {section.label}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}