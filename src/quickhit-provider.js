import React, { Component } from 'react'

import QuickHitContext from './quickhit-context'

function randomNumber(max = 10) {
  return Math.floor(Math.random() * max + 1)
}

const getItemsFromStorage = () => {
  const items = localStorage.getItem('items')

  if (items === null) return []
  return JSON.parse(items)
}

const saveItemToStorage = item => {
  let itemsFromStorage = localStorage.getItem('items')

  if (itemsFromStorage === null) {
    itemsFromStorage = '[]'
  }
  const items = JSON.parse(itemsFromStorage)

  items.push(item)

  localStorage.setItem('items', JSON.stringify(items))
  return items
}

const updateItemInStorage = item => {
  let itemsFromStorage = localStorage.getItem('items')

  if (itemsFromStorage === null) {
    itemsFromStorage = '[]'
  }
  const items = JSON.parse(itemsFromStorage)

  const todos = items.reduce((accumulator, cur, i) => {
    accumulator[cur.id] = cur
    return accumulator
  }, {})

  todos[item.id] = item
  const itemsToSave = Object.keys(todos).map(td => {
    return todos[td]
  })
  localStorage.setItem('items', JSON.stringify(itemsToSave))
  // listItems();
}
class QuickHitProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCompleted: true,
      items: getItemsFromStorage(),
      saveItem: this.saveItem,
      updateItem: this.updateItem,
      toggleItems: this.toggleItems,
      completeItem: this.completeItem,
      deleteItem: this.deleteItem,
    }
  }
  updateItem = item => {
    updateItemInStorage(item)
    this.setState({ items: getItemsFromStorage() })
  }
  saveItem = item => {
    saveItemToStorage(item)
    this.setState({ items: getItemsFromStorage() })
  }
  toggleItems = value => {
    this.setState({
      showCompleted: value,
    })
  }
  completeItem = item => {
    updateItemInStorage(item)
    this.setState({ items: getItemsFromStorage() })
  }
  deleteItem = () => {
    this.setState({
      title: `Cat #${randomNumber()}`,
    })
  }

  render() {
    const { children } = this.props

    return (
      <QuickHitContext.Provider value={this.state}>
        {children}
      </QuickHitContext.Provider>
    )
  }
}

export default QuickHitProvider
