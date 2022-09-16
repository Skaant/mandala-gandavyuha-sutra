import { COLORS } from "../enums/colors";
import Place from "../types/Place";

const PLACES: { [key: string]: Place } = {
  SRAVASTI: { name: "Sravasti", color: COLORS.GREY, size: 200 },
  PAVILLON_PARE: {
    name: "Pavillon à étages Paré de Grands Ornements",
    color: COLORS.PSIK,
    size: 50,
  },
  JARDIN_AUMONE: {
    name: "Jardin de l'Aumône aux Sans-Protecteurs",
    color: COLORS.LIGHT_BLUE,
    size: 100,
  },
  PARC_JETA: { name: "Parc de Jeta", color: COLORS.GREEN, size: 150 },
};

export default PLACES;
