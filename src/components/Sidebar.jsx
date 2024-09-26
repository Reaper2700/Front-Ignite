import {PencilLine} from 'phosphor-react';

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
             className={styles.cover}
             src="https://images.unsplash.com/photo-1726809755769-cc8cb426b57b?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
             alt=""
            />
        
            <div className={styles.profile}>
                <Avatar src="https://i.redd.it/4bqhih6hof7a1.jpg"/>

                <strong>Rafael Pereira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}