console.log("\nWebsite designed and coded by:\n\n");
let mark = "";
for (let i = 0; i <= 9; i++) {
  if (i === 0 || i === 9) {
    for (let i = 0; i <= 19; i++) {
      mark += "-";
    }
  } else if (i === 1) {
    for (let i = 0; i <= 8; i++) {
      if (i >= 4 && i <= 6) {
        mark += "@";
      } else {
        mark += "-";
      }
    }
    mark += "|CHELSEA|--";
  } else if (i === 8) {
    for (let i = 0; i <= 19; i++) {
      if (i >= 4 && i <= 6) {
        mark += "@";
      } else if (i === 13) {
        mark += "O";
      } else {
        mark += "-";
      }
    }
  } else if (i === 2 || i === 7) {
    for (let i = 0; i <= 19; i++) {
      if (i === 3 || i === 7) {
        mark += "@";
      } else if (i === 13) {
        mark += "T";
      } else {
        mark += "-";
      }
    }
  } else if (i > 2 || i < 7) {
    for (let i = 0; i <= 12; i++) {
      if (i === 2) {
        mark += "@";
      } else {
        mark += "-";
      }
    }
    if (i === 3) {
      mark += "H";
    } else if (i === 4) {
      mark += "O";
    } else if (i === 5) {
      mark += "M";
    } else if (i === 6) {
      mark += "P";
    }
    for (let i = 0; i <= 5; i++) {
      mark += "-";
    }
  }
  console.log(mark);
  mark = "";
}
console.log("\nhttps://chelsea.technology/\n\n");
