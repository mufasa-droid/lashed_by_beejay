/**
 * Helper utility functions for the booking domain
 */

/**
 * Returns an array of upcoming available days (excluding closed days) for selection
 */
export function getUpcomingBookingDates(daysAhead = 14) {
  const dates = [];
  const today = new Date();
  
  for (let i = 1; i <= daysAhead; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    
    // Format YYYY-MM-DD
    const iso = d.toISOString().split('T')[0];
    
    // Human readable
    const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
    const monthName = d.toLocaleDateString('en-US', { month: 'short' });
    const dayNum = d.getDate();
    
    // Note: studio is closed Sun/Mon by default
    const dayOfWeek = d.getDay(); // 0 is Sunday, 1 is Monday
    const isStudioClosed = dayOfWeek === 0 || dayOfWeek === 1;

    dates.push({
      iso,
      display: `${dayName}, ${monthName} ${dayNum}`,
      isClosed: isStudioClosed,
      dayName
    });
  }
  
  return dates;
}

/**
 * Standard luxury time windows for studio sessions
 */
export const POPULAR_TIME_SLOTS = [
  "10:00 AM (Morning)",
  "12:00 PM (Midday)",
  "2:30 PM (Afternoon)",
  "4:30 PM (Late Afternoon)",
  "6:00 PM (Evening Haute Slot)"
];
