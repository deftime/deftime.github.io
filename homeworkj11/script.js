let dateMass = [
  {date: "23.06.2019"},
  {date: "12.01.2019"},
  {date: "30.10.2019"},
  {date: "23.02.2015"},
  {date: "12.11.2018"}
];

function dataSort(mass) {
  let massTS = [];
  let rdySort = [];
  for (let i = 0; i < mass.length; i++) {
    let timestp = Date.parse(mass[i].date.split('.').reverse().join('-'));
    massTS.push(timestp);
  }
  massTS.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < massTS.length; i++) {
    let strDate = `${new Date(massTS[i]).getDate()}.${new Date(massTS[i]).getMonth() + 1}.${new Date(massTS[i]).getFullYear()}`;
    rdySort.push(strDate);
  }
  return rdySort;
}

dataSort(dateMass);
