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
    return;
  }
  arrEl.forEach((itema) => {
    const f = fI(arr, itema);
    possTotal.push(f);
    return possTotal;
  });
  mergArr(possTotal);
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
const valueId = 0;
const arrId = ['0', 'one1', 'two2', 'three3', 'four4', 'five5', 'six6',
  'seven7', 'eight8', 'nine9']; // массив id
// let listElemWithId = [];

const findArrId = () => { // функ. собирает cell с id в массив
  const arr = document.getElementsByClassName(' cell ');
  const listElemWithId = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].id) {
      listElemWithId.push(arr[i].id);
    }
  }
  return listElemWithId;
};

const findContentElemById = (arr) => {
  const listContElemById = [];
  const len = arr.length;
  for (let i = 0; i < len; i += 1) {
    listContElemById.push(document.getElementById(arr[i]).textContent);
  }
  return listContElemById;
};
