const mergArr = (args) => { //  [[[],[]], [[],[]]] ==> [[],[],[],[]]
  const arrElem = [];
  const pushArr = (arR) => {
    arR.forEach((i) => {
      arrElem.push(i);
    });
  };
  args.forEach((item) => {
    pushArr(item);
  });
  return arrElem;
};

const toTal = (arr, arrEl) => {
  const possTotal = [];
  if (arr === [] || arrEl === undefined) {
    return ;
  }
  arrEl.forEach((itema) => {
    const f = fI(arr, itema);
    possTotal.push(f);
    return possTotal;
  });
  return mergArr(possTotal);
}; 

function fI(arrCourse, elem) { // выдаёт массив
  const poss = [];
  arrCourse.forEach((item) => {
    item.forEach((iTem) => {
      if (iTem === elem) {
        poss.push(delElem(item, elem))
      }
    });
  });
  return poss;
}