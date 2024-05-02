import styles from '../../../styles/components/AddComment.module.css';
import Button from '../../common/Button';

function AddComment() {
  return (
    <div className={styles.container}>
      <h3>Add Comment</h3>

      <div>
        {/* <label htmlFor='comment'>At least 10 characters</label> */}
        <textarea
          //   className={styles.invalidInput}
          id='comment'
          name='comment'
          rows={4}
          placeholder='Just leave your thoughts and suggestions...'
        />
      </div>

      <div className={styles.submitContainer}>
        <p>
          <span>300</span> characters left
        </p>
        <Button>Post Comment</Button>
      </div>
    </div>
  );
}

export default AddComment;
