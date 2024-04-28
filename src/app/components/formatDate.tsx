export default function formatDate(dateString: string | number | Date) {
  const date = new Date(dateString); // Convert string to Date object
  let month = "" + (date.getMonth() + 1), // Get month, adjust since months are 0-indexed
    day = "" + date.getDate(), // Get day
    year = date.getFullYear(); // Get year

  // Ensure two digits for month and day
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [month, day, year].join("-"); // Format as MM-DD-YYYY
}
