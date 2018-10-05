const mergArr = (args) => { //  [[[],[]], [[],[]]] ==> [[],[],[],[]]
  const arrElem = [];
  const pushArr = (arR) => {
    arR.forEach((i) => {
      arrElem.push(i);
    });
  };
  args.forEach((item) => {
    