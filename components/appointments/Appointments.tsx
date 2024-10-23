'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, User, Calendar as CalendarIcon } from 'lucide-react';

interface Appointment {
  id: string;
  title: string;
  date: string;
  time: string;
  location?: string;
  with: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export default function Appointments() {
  const [appointments] = useState<Appointment[]>([
    {
      id: '1',
      title: 'Dental Checkup',
      date: '2024-04-15',
      time: '09:00 AM',
      location: 'Dental Clinic',
      with: 'Dr. Smith',
      status: 'upcoming',
    },
    {
      id: '2',
      title: 'Client Meeting',
      date: '2024-04-16',
      time: '02:00 PM',
      location: 'Virtual',
      with: 'John Doe',
      status: 'upcoming',
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-500';
      case 'completed': return 'bg-green-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        {appointments.map((appointment) => (
          <Card key={appointment.id} className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">{appointment.title}</h3>
              <Badge variant="secondary" className="capitalize">
                {appointment.status}
              </Badge>
            </div>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                {appointment.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {appointment.time}
              </div>
              {appointment.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {appointment.location}
                </div>
              )}
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {appointment.with}
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm">Reschedule</Button>
              <Button variant="outline" size="sm" className="text-destructive">Cancel</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}