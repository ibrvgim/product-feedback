import styles from '../../../styles/components/ReplyComment.module.css';
import Button from '../../common/Button';

function ReplyComment() {
  return (
    <div className={styles.container}>
      <div className={styles.inputArea}>
        {/* <label htmlFor='reply'>At least 10 characters</label> */}
        <textarea
          //   className={styles.invalidInput}
          id='reply'
          name='reply'
          rows={2}
          placeholder='Reply to the comment...'
        />
      </div>

      <Button style='reply'>Post Reply</Button>
    </div>
  );
}

export default ReplyComment;
