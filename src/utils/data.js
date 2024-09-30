export const DATA = [
  {
    id: 1,
    name: "Function 1",
    input: "1",
    output: "2",
    defaultEq: "x^2",
  },
  {
    id: 2,
    name: "Function 2",
    input: "2",
    output: "4",
    defaultEq: "2x+4",
  },
  {
    id: 3,
    name: "Function 3",
    input: "3",
    output: "y",
    defaultEq: "x^2+20",
  },
  {
    id: 4,
    name: "Function 4",
    input: "4",
    output: "5",
    defaultEq: "x-2",
  },
  {
    id: 5,
    name: "Function 5",
    input: "5",
    output: "3",
    defaultEq: "x/2",
  },
];

export const EDGES = [
  { id: "1-2", source: "1", target: "2" },
  { id: "2-3", source: "2", target: "3" },
  { id: "3-4", source: "3", target: "4" },
  { id: "4-5", source: "4", target: "5" },
];
