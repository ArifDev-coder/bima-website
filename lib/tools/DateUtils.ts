export const formatInvoiceDate = (date: Date) => {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

export const getDueDate = (days = 7) => {
  const date = new Date();

  date.setDate(date.getDate() + days);

  return formatInvoiceDate(date);
};
