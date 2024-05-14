import styles from '../../../styles/components/CommentsBox.module.css';
import { Comments } from '../../../types/types';
import CommentItem from './CommentItem';
import ReplyItem from './ReplyItem';

function CommentsBox({ comments }: { comments: Comments[] }) {
  return (
    <div className={styles.container}>
      <h4>{comments.length} Comments</h4>

      <div className={styles.commentsContainer}>
        {comments.map((item) => (
          <div className={styles.commentsItem} key={item.id}>
            <CommentItem item={item} />
            {item.replies && item.replies.length > 0 && (
              <div className={styles.commentReplies}>
                {item.replies.map((reply) => (
                  <ReplyItem key={item.id} reply={reply} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentsBox;
