const date = new Date();
const [month,day,year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
console.log(new Date);

const formattedDate = `${year}年${month}月${day}日`;

console.log(formattedDate);