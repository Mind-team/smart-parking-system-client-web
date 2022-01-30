import { useContext } from "react";
import { LanguageContext } from "../../context/languages";

export const useDictionary = (nodes: string[]) => {
  const dict = useContext(LanguageContext);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  let res = dict[nodes[0]];
  nodes.shift();
  for (const node in nodes) {
    res = res[node];
  }
  return res;
};
