let journal = [];

function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}
addEntry(["work", "touched tree", "pizza", "running",
    "television"], false);
addEntry('abc', 'def');

console.log(journal);