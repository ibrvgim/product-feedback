import styles from '../../../styles/components/CommentsBox.module.css';
import CommentItem from './CommentItem';

function CommentsBox() {
  return (
    <div className={styles.container}>
      <h4>2 Comments</h4>

      <div className={styles.commentsContainer}>
        <div className={styles.commentsItem}>
          <CommentItem />
          <div className={styles.commentReplies}>
            <CommentItem />
            <CommentItem />
          </div>
        </div>

        <div className={styles.commentsItem}>
          <CommentItem />
          <div className={styles.commentReplies}>
            <CommentItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentsBox;
