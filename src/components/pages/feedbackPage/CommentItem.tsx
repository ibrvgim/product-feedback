import styles from '../../../styles/components/CommentItem.module.css';
// import ReplyComment from './ReplyComment';

function CommentItem() {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <img
          className={styles.userImage}
          src='/user-images/image-anne.jpg'
          alt='user image'
        />

        <div className={styles.userComment}>
          <p className={styles.userName}>Anne Chang</p>
          <p className={styles.userTag}>@anne.chang</p>
          <p className={styles.userText}>
            Awesome idea! Trying to find framework-specific projects within the
            hubs can be tedious.
          </p>
        </div>

        <button className={styles.replyButton}>Reply</button>
      </div>
      {/* <ReplyComment /> */}
    </div>
  );
}

export default CommentItem;
