import styles from './Container.module.css'
import { ContainerProps } from './Container.props';

function Container({children,...props}:ContainerProps) {
    return (
        <div className={styles['container']} {...props}>
            {children}
        </div>
    );
}

export default Container;