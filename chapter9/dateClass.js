let now = new Date();
//console.log(now);

function getDate(string) {
    let [_, month, day, year] =
        /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    console.log( [_, month, day, year])
    return new Date(year, month - 1, day);
}
console.log(getDate("11-21-2019"));
// → 2019-01-30T00:00:00.000Z (CET)