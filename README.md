# Taskmaster - Personal Organization App

A modern, feature-rich personal organization application built with Next.js, TypeScript, and Tailwind CSS. Taskmaster helps you manage tasks, schedule appointments, and organize your calendar all in one beautiful interface.

![Taskmaster Screenshot](https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070)

## Features

### Task Management
- Create, edit, and delete tasks
- Set priority levels (low, medium, high)
- Add due dates
- Mark tasks as complete
- Organize tasks by category

### Calendar
- Interactive calendar interface
- View events by day
- Schedule new events
- Event details including location and time
- Visual indicators for days with events

### Appointments
- Schedule and manage appointments
- Track appointment status (upcoming, completed, cancelled)
- Location and contact information
- Rescheduling capabilities
- Virtual meeting support

### Customization
- Theme switching (Light/Dark/System)
- Custom background selection
- Modern blur effects
- Responsive design for all devices

## Tech Stack

- **Framework**: Next.js 13.5 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Icons**: Lucide React
- **Theme Management**: next-themes
- **UI Components**:
  - Radix UI primitives
  - Custom shadcn/ui components
  - Modern card layouts
  - Interactive tabs
  - Responsive grid system

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with theme provider
│   ├── page.tsx         # Main application page
│   └── globals.css      # Global styles
├── components/
│   ├── appointments/    # Appointment management
│   ├── calendar/        # Calendar functionality
│   ├── settings/        # Theme and background settings
│   ├── todo/           # Task management
│   └── ui/             # Reusable UI components
└── lib/
    └── utils.ts        # Utility functions
```

## Features in Detail

### Task Management
- Priority-based task organization
- Due date tracking
- Visual status indicators
- Quick actions for task completion

### Calendar Integration
- Monthly view calendar
- Daily event listing
- Event details including location and time
- Visual indicators for busy days

### Appointment System
- Detailed appointment cards
- Status tracking
- Location information
- Contact details
- Action buttons for rescheduling/cancellation

### Settings & Customization
- Theme switching between light and dark modes
- System theme detection
- Custom background selection with blur effects
- Persistent settings storage

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.