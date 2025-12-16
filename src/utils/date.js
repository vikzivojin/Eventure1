export function formatEventDate(date) {
  const eventDate = new Date(date);
  const day = String(eventDate.getDate()).padStart(2, "0");
  const month = eventDate.toLocaleString("en-US", { month: "long" });
  return {
    eventDate,
    day,
    month,
  };
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
