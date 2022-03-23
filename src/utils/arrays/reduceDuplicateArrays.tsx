// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const reduceDuplicateValues = (arr: any[]) => {
  return arr
    ?.map((e) => JSON.stringify(e))
    .reduce(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (acc: any, cur: any) => (acc.includes(cur) || acc.push(cur), acc), // eslint-disable-line no-sequences
      []
    )
    .map((i: string) => JSON.parse(i)); // delete duplicates from array
};
