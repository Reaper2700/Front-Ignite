import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./comment.module.css"
import { Avatar } from "./Avatar"

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://m.media-amazon.com/images/I/71jnEkjX8RL._AC_UF1000,1000_QL80_.jpg" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.comentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rafael Barbosa</strong>
                            <time title="23 de setembro" dateTime="2022-05-11 08:13:30">Publicado há 1 hora</time>
                        </div>

                        <button title="Deletar">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>muito bom(mensagem)</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}