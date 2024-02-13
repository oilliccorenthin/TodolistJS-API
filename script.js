import { TodoList } from './components/TodoList.js'
import { fetchJSON } from './functions/api.js'
import { createElement } from './functions/dom.js'

try {
const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=7')
const list = new TodoList(todos)
list.appendTo(document.querySelector('#todolist'))

} catch (e) {
    const alertElement = createElement('div', {
        class: 'alert alert-danger m-2',
        role: 'alert'
    })
    alertElement.innerText = "Impossible de charger les elements"
    document.body.prepend(alertElement)
    console.error(e)
    
}



class TodoElement {

    constructor(userId, id, title, completed){
        this.userId = userId
        this.id = id
        this.title = title
        this.completed = completed
    }

}
