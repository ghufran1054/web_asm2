import { useState } from "react";
import { format, addMonths, subMonths, isSameMonth, isToday } from "date-fns";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const endOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
  const startDayOfWeek = startOfMonth.getDay();
  const totalDays = endOfMonth.getDate();

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  const getDaysInMonth = () => {
    let days = [];
    // Fill in days before the start of the current month (previous month's days)
    const prevMonthDays = startDayOfWeek;
    const prevMonthLastDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0).getDate();

    for (let i = prevMonthDays; i > 0; i--) {
      days.push(
        <div
          key={`prev-${i}`}
          className="text-gray-300 w-10 h-10 flex items-center justify-center"
        >
          {prevMonthLastDate - i + 1}
        </div>
      );
    }

    // Fill in actual days of the current month
    for (let day = 1; day <= totalDays; day++) {
      const currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const isSelected = selectedDate && selectedDate.toDateString() === currentDate.toDateString();
      days.push(
        <div
          key={day}
          onClick={() => handleSelectDate(currentDate)}
          className={`w-10 h-10 flex items-center justify-center cursor-pointer ${
           
            isSelected ? "bg-blue-500 text-white rounded-full" :
            "text-gray-700 hover:bg-blue-100 rounded-full"
          }`}
        >
          {day}
        </div>
      );
    }

    // Fill in days after the end of the current month (next month's days)
    const nextMonthDays = 42 - days.length; // A 6x7 grid (6 rows)
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push(
        <div
          key={`next-${i}`}
          className="text-gray-300 w-10 h-10 flex items-center justify-center"
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="w-[350px] p-4 border rounded-lg shadow-lg bg-white">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="text-gray-500">
          &lt;
        </button>
        <div className="text-lg font-semibold">{format(currentMonth, "MMMM yyyy")}</div>
        <button onClick={handleNextMonth} className="text-gray-500">
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-gray-500 mb-2">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="w-10">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {getDaysInMonth()}
      </div>
    </div>
  );
};

export default Calendar;
