'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Settings, Sun, Moon, Monitor, Image } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const backgrounds = [
  {
    id: 'purple-haze',
    name: 'Purple Haze',
    url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070',
    color: 'from-purple-500/30',
  },
  {
    id: 'blue-waves',
    name: 'Blue Waves',
    url: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=80&w=2070',
    color: 'from-blue-500/30',
  },
  {
    id: 'green-forest',
    name: 'Green Forest',
    url: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&q=80&w=2070',
    color: 'from-green-500/30',
  },
];

export default function SettingsMenu() {
  const { theme, setTheme } = useTheme();
  const [selectedBackground, setSelectedBackground] = useState(backgrounds[0]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="fixed bottom-4 right-4 h-12 w-12 rounded-full">
          <Settings className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
        </SheetHeader>
        
        <div className="py-6 space-y-8">
          {/* Theme Selection */}
          <div className="space-y-4">
            <Label>Theme</Label>
            <RadioGroup
              defaultValue={theme}
              onValueChange={(value) => setTheme(value)}
              className="grid grid-cols-3 gap-2"
            >
              <Label
                htmlFor="light"
                className={cn(
                  "flex flex-col items-center justify-between rounded-md border-2 border-muted p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer",
                  theme === 'light' && "border-primary"
                )}
              >
                <RadioGroupItem value="light" id="light" className="sr-only" />
                <Sun className="h-5 w-5 mb-2" />
                Light
              </Label>
              <Label
                htmlFor="dark"
                className={cn(
                  "flex flex-col items-center justify-between rounded-md border-2 border-muted p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer",
                  theme === 'dark' && "border-primary"
                )}
              >
                <RadioGroupItem value="dark" id="dark" className="sr-only" />
                <Moon className="h-5 w-5 mb-2" />
                Dark
              </Label>
              <Label
                htmlFor="system"
                className={cn(
                  "flex flex-col items-center justify-between rounded-md border-2 border-muted p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer",
                  theme === 'system' && "border-primary"
                )}
              >
                <RadioGroupItem value="system" id="system" className="sr-only" />
                <Monitor className="h-5 w-5 mb-2" />
                System
              </Label>
            </RadioGroup>
          </div>

          {/* Background Selection */}
          <div className="space-y-4">
            <Label>Background</Label>
            <div className="grid grid-cols-3 gap-4">
              {backgrounds.map((bg) => (
                <button
                  key={bg.id}
                  onClick={() => setSelectedBackground(bg)}
                  className={cn(
                    "relative aspect-video rounded-lg overflow-hidden",
                    "border-2 hover:border-primary transition-colors",
                    selectedBackground.id === bg.id && "border-primary",
                    "group"
                  )}
                >
                  <img
                    src={bg.url}
                    alt={bg.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Image className="w-5 h-5 text-white" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}