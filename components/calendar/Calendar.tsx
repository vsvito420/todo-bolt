'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Clock, MapPin } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: Date;
  location?: string;
  time?: string;
}

export default function Calendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [events] = useState<Event[]>([
    {
      id: '1',
      title: 'Team Meeting',
      date: new Date(2024, 3, 15),
      location: 'Conference Room A',
      time: '10:00 AM',
    },
    {
      id: '2',
      title: 'Project Deadline',
      date: new Date(2024, 3, 16),
      time: '5:00 PM',
    },
  ]);

  const todayEvents = events.filter(
    (event) => event.date.toDateString() === (date?.toDateString() ?? '')
  );

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-[auto_1fr]">
        <Card className="p-4">
          <CalendarComponent
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </Card>

        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">
            Events for {date?.toLocaleDateString()}
          </h2>
          <div className="space-y-4">
            {todayEvents.length > 0 ? (
              todayEvents.map((event) => (
                <Card key={event.id} className="p-4">
                  <h3 className="font-medium">{event.title}</h3>
                  <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {event.time && (
                      <p className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </p>
                    )}
                    {event.location && (
                      <p className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </p>
                    )}
                  </div>
                </Card>
              ))
            ) : (
              <p className="text-muted-foreground">No events scheduled for this day</p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}