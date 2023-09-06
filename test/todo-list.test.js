import { Task, TodoList } from '../logic/todo-list.js'

describe('To-do list functionality', () => {

  it('should correctly add a single new task to the to-do list', () => {
    // Arrange
    const todoList = new TodoList()
    const newTask = new Task('Test task')

    // Act
    todoList.addTask(newTask)
    
    // Assert
    // 💡 Tip: use toEqual() to compare arrays and objects, and toBe() to compare primitive values (like numbers or booleans)
    expect(todoList.tasks).toEqual([newTask])
  })

  it('should correctly add multiple new tasks to the to-do list', () => {
    const todoList = new TodoList()
    const testTask1 = new Task('Test task 1')
    const testTask2 = new Task('Test task 2')

    todoList.addTask(testTask1)
    todoList.addTask(testTask2)

    expect(todoList.tasks).toEqual([testTask1, testTask2])
  })

  it('should not add a task to a list if the task has no name', () => {
    const todoList = new TodoList()
    const testTask = new Task('')

    todoList.addTask(testTask)

    expect(todoList.tasks).toEqual([])
  })

  it('should correctly toggle the completion status of a task', () => {
    const testTask = new Task('Test task')

    expect(testTask.isComplete).toBe(false)

    testTask.toggleCompletion()
    expect(testTask.isComplete).toBe(true)

    testTask.toggleCompletion()
    expect(testTask.isComplete).toBe(false)
  })

  it('should correctly delete a task from a to-do list', () => {
    const todoList = new TodoList()
    const taskToDelete = new Task('Task to delete')
    const taskToKeep = new Task('Task to keep')
    todoList.addTask(taskToDelete)
    todoList.addTask(taskToKeep)

    todoList.deleteTask(taskToDelete)

    expect(todoList.tasks).toEqual([taskToKeep])
  })
}