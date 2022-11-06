
import visa from "../images/visa.png";
import americanexpress from "../images/amex.png";
import dinersclub from "../images/diners.png";
import discover from "../images/discover.png";
import elo from "../images/elo.png";
import hiper from "../images/hiper.png";
import jcb from "../images/JCB.png";
import mastercard from "../images/masterCard.png";
import mir from "../images/mir.png";
import unionpay from "../images/unionpay.png";
export function getCardImage(type) {
    switch (type) {
      case "visa":
        return visa;
      case "mastercard":
        return mastercard;
      case "amex":
        return americanexpress;
      case "diners club":
        return dinersclub;
      case "discover":
        return discover;
      case "jcb":
        return jcb;
      case "unionpay":
        return unionpay;
      case "maestro":
        return mastercard;
      case "mir":
        return mir;
      case "elo":
        return elo;
      case "hiper":
        return hiper;
      case "hipercard":
        return hiper;
      default:
        return visa;
    }
  }