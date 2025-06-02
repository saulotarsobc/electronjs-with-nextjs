import fileSvg from "../../public/file.svg";
import globeSvg from "../../public/globe.svg";
import nextSvg from "../../public/next.svg";
import vercelSvg from "../../public/vercel.svg";
import windowSvg from "../../public/window.svg";

export type SrcImages = typeof srcImages;

export const srcImages = {
  nextSvg: nextSvg.src,
  vercelSvg: vercelSvg.src,
  fileSvg: fileSvg.src,
  windowSvg: windowSvg.src,
  globeSvg: globeSvg.src,
};
