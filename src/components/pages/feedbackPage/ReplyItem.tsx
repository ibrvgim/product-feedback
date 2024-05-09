import useGetCompany from '../../../hooks/company/useGetCompany';
import FullSpinnerPage from '../../../pages/FullSpinnerPage';
import styles from '../../../styles/components/CommentItem.module.css';

function ReplyItem({ reply }) {
  if (!reply) return;
  const { content, replyingTo, user } = reply;
  const { companyData, isPending } = useGetCompany();
  const isAdmin =
    companyData?.user_metadata.companyName.toLowerCase() ===
    user?.name.toLowerCase();

  if (isPending) return <FullSpinnerPage />;

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <img
          className={styles.userImage}
          src={`/${user.image}`}
          alt='user image'
        />

        <div className={styles.userComment}>
          <p className={isAdmin ? styles.admin : styles.userName}>
            {user.name}
          </p>
          <p className={isAdmin ? styles.adminTag : styles.userTag}>
            {isAdmin ? '' : '@'}
            {user.username}
          </p>
          <p className={styles.userText}>
            <span className={styles.replytag}>@{replyingTo}</span> {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReplyItem;
