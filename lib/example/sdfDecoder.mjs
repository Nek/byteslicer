import decoder from "../generic.mjs";
import sdfSpec from "./sdfSpec.mjs";

export default function sdfDecoder(ab) {
  return decoder(ab, sdfSpec);
}
