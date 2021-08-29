import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AddTodo from '../component/AddTodo/AddTodo'
import NavBar from '../component/NavBar/NavBar'
import TodoList from '../component/TodoList/TodoList'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <AddTodo />
      <TodoList />
    </>
  )
}

export default Home
