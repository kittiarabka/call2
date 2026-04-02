const tasks = [
  { id: 1, title: "Завтрак", duration: 1, priority: 2 },
  { id: 2, title: "Учёба", duration: 4, priority: 5 },
  { id: 3, title: "Прогулка", duration: 2, priority: 3 },
  { id: 4, title: "Игры", duration: 3, priority: 1 },
  { id: 5, title: "Работа", duration: 6, priority: 5 }
];

const selectedIds = [1, 2, 3, 5];


function getSelectedTasks(tasks, selectedIds) {
  return tasks.filter(task => selectedIds.includes(task.id));
}


function calculateTotalDuration(selectedTasks) {
  return selectedTasks.reduce((sum, task) => sum + task.duration, 0);
}


function sortByPriority(selectedTasks) {
  return [...selectedTasks]
    .sort((a, b) => b.priority - a.priority)
    .map(task => ({ title: task.title, priority: task.priority }));
}

function filterHighPriority(selectedTasks) {
  return selectedTasks
    .filter(task => task.priority >= 4)
    .map(task => ({ title: task.title, priority: task.priority }));
}


function checkTimeLimit(totalDuration) {
  return totalDuration <= 12 ? "допустимо" : "перегружено";
}


const selectedTasks = getSelectedTasks(tasks, selectedIds);
const totalDuration = calculateTotalDuration(selectedTasks);
const sortedTasks = sortByPriority(selectedTasks);
const highPriorityTasks = filterHighPriority(selectedTasks);
const scheduleStatus = checkTimeLimit(totalDuration);

console.log("Выбранные задачи:");
console.log(selectedTasks);

console.log(`Общая длительность: ${totalDuration} часов`);

console.log("Отсортированные задачи:");
console.log(sortedTasks);

console.log("Задачи с высоким приоритетом:");
console.log(highPriorityTasks);

console.log(`Статус расписания: ${scheduleStatus}`);