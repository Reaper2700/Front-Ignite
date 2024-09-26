import { Header } from "./components/header"
import { Post } from "./components/Post"

import styles from './App.module.css'
import './Global.css';
import { Sidebar } from "./components/sidebar";





const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://i.redd.it/4bqhih6hof7a1.jpg",
      name: 'Rafael Barbosa Pereira',
      role: 'CTO @ Rocketseat'
    },
    content: [
        {type: 'paragrafo', content: "Opa eae"},
        {type: 'paragrafo', content: "conteudo é nós sempre forte amigo"},
        {type: 'paragrafo', content: "jane.design/doctor"}
    ],
    publishedAT: new Date('2024-09-25 00:26'),
  }
]


function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(posts => {
            return (
              <Post
                author={posts.author}
                content={posts.content}
                publishedAT={posts.publishedAT}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
