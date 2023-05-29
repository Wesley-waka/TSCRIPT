import React, { useEffect } from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import reminderService from "./services/reminder";
import Reminder from "./models/reminder";
import ReminderList from "./components/ReminderList";
import NewReminder from "./components/NewReminder";
// const reminders: Reminder[] = [{ id: 1, title: "Reminder 1" }];
function App() {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, title: "Reminder 1" },
  ]);
  const removeReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };
  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.addReminder(title);
    setReminders([newReminder, ...reminders]);
  };
  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
      {/* <button className="btn btn-primary">Click Me</button> */}
    </div>
  );
}

export default App;
