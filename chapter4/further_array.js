// array method: push, pop, unshift, shift
let todoList = ['a', 'b', 'c', 'd'];
function remember(task) {
    todoList.push(task);
}
function remove() {
    todoList.pop();
}
function getTask() {
    return todoList.shift();
}
function rememberUrgently(task) {
    todoList.unshift(task);
}

console.log(todoList)
remember('e');
console.log(todoList)
getTask();
console.log(todoList)
rememberUrgently('a');
console.log(todoList)
remove();
console.log(todoList)