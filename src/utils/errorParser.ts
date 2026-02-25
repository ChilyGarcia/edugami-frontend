export default function errorParser(error?: any, req?: Response): string {
  let parsedMessage = "";

  if (!error && !req) {
    return "Error desconocido";
  }

  switch (error) {
    case "caso1":
      parsedMessage = "Error de caso 1";
      break;

    default:
      parsedMessage = error || "Error desconocido";
      break;
  }

  if (req?.status === 400) parsedMessage = "Petición mal formada";

  return parsedMessage;
}
