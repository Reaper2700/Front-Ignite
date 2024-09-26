import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Avatar } from "./Avatar";
import { Comment } from "./comment";
import styles from "./Post.module.css";





export function Post({author, publishedAT, content}) {
    const publisedDateFormat = format(publishedAT, "d 'de' LLLL 'ás' HH:mm'h'",{
        locale:ptBR
    })

    const publisedDateRelativeNow = formatDistanceToNow(publishedAT, {
        locale:ptBR,
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorinfor}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>


                <time title={publisedDateFormat} dataTime={publishedAT.toISOString()}>
                {publisedDateRelativeNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type == 'paragrafo'){
                        return <p>{line.content}</p>;
                    }else if(line.type == 'link'){
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>


            <form className={styles.commentform}>
                <strong>Deixe seu feadbeack</strong>

                <textarea
                    placeholder="deixe um comentario"
                />

                <footer>
                    <button type="summit">Publicar</button>
                </footer>
            </form>


            <div className={styles.commmentList}>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}