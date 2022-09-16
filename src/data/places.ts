import { COLORS } from "../enums/colors";
import Place from "../types/Place";

const PLACES: { [key: string]: Place } = {
  SRAVASTI: { name: "Sravasti", color: COLORS.GREY, size: 220 },
  PAVILLON_PARE: {
    name: "Pavillon à étages Paré de Grands Ornements",
    color: COLORS.JEWEL,
    size: 20,
  },
  JARDIN_AUMONE: {
    name: "Jardin de l'Aumône aux Sans-Protecteurs",
    color: COLORS.LIGHT_BLUE,
    size: 80,
  },
  PARC_JETA: { name: "Parc de Jeta", color: COLORS.GREEN, size: 170 },
};

export default PLACES;
