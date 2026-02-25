export const priceFormatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

export const decimalFormatter = new Intl.NumberFormat("es-CO", {
  style: "decimal",
  maximumFractionDigits: 2,
});
