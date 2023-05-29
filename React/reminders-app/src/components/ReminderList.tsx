import React from "react";
import Reminder from "../models/reminder";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.title}
            <button
              onClick={() => onRemoveReminder(item.id)}
              className="btn btn-outline-danger mx-2 rounded pill"
            >
              DELETE{" "}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReminderList;
