import styles from '../../../styles/components/CommentItem.module.css';
import useGetCompany from '../../../hooks/company/useGetCompany';
import FullSpinnerPage from '../../../pages/FullSpinnerPage';
import { Reply } from '../../../types/types';
import useResponsiveDesign from '../../../hooks/other/useResponsiveDesign';

function ReplyItem({ reply }: { reply: Reply }) {
  const { content, replyingTo, user } = reply;
  const { companyData, isPending } = useGetCompany();
  const isAdmin =
    companyData?.user_metadata.companyName.toLowerCase() ===
    user?.name.toLowerCase();
  const { mediumScreen } = useResponsiveDesign();

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
          <p
            className={styles.userText}
            style={mediumScreen ? { marginRight: '-1rem' } : {}}
          >
            <span className={styles.replytag}>@{replyingTo}</span> {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReplyItem;
