'use client';

import TodoList from '@/components/todo/TodoList';
import Calendar from '@/components/calendar/Calendar';
import Appointments from '@/components/appointments/Appointments';
import SettingsMenu from '@/components/settings/SettingsMenu';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusCircle, Calendar as CalendarIcon, CheckSquare, Clock } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted relative">
      {/* Background Image with Blur */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070')`,
        }}
      >
        <div className="absolute inset-0 backdrop-blur-2xl bg-background/80" />
      </div>

      <div className="container mx-auto px-4 py-8 relative">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Taskmaster</h1>
          <p className="text-muted-foreground mt-2">Your personal productivity companion</p>
        </header>

        <div className="grid gap-6 md:grid-cols-[250px_1fr]">
          {/* Sidebar */}
          <aside className="space-y-4">
            <Button className="w-full justify-start" variant="outline">
              <PlusCircle className="mr-2 h-4 w-4" aria-hidden="true" />
              New Task
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <CalendarIcon className="mr-2 h-4 w-4" aria-hidden="true" />
              New Event
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Clock className="mr-2 h-4 w-4" aria-hidden="true" />
              New Appointment
            </Button>
          </aside>

          {/* Main Content */}
          <div className="space-y-4">
            <Tabs defaultValue="tasks" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="tasks" className="flex items-center gap-2">
                  <CheckSquare className="h-4 w-4" />
                  Tasks
                </TabsTrigger>
                <TabsTrigger value="calendar" className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  Calendar
                </TabsTrigger>
                <TabsTrigger value="appointments" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Appointments
                </TabsTrigger>
              </TabsList>
              <TabsContent value="tasks">
                <TodoList />
              </TabsContent>
              <TabsContent value="calendar">
                <Calendar />
              </TabsContent>
              <TabsContent value="appointments">
                <Appointments />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <SettingsMenu />
    </main>
  );
}