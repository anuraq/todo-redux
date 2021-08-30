import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Provider } from 'react-redux'
import AddTodo from '../component/AddTodo/AddTodo'
import NavBar from '../component/NavBar/NavBar'
import TodoListCon from '../component/TodoListCon/TodoListCon'
import styles from '../styles/Home.module.css'
import { store } from '../redux/store'

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Provider store={store} >
        <AddTodo />
        <TodoListCon />
      </Provider>
    </>
  )
}

export default Home
