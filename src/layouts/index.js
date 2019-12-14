import styles from './index.css';
import Header from '@/components/Header'
import FootBar from '@/components/FootBar'

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <Header>
      </Header>
      {props.children} 
      <FootBar>
        
      </FootBar>
    </div>
  );
}

export default BasicLayout;
