import styles from '../styles/ui/FeedbackDetail.module.css';
import Section from '../components/common/Section';
import GoBack from '../components/common/GoBack';
import FilterButton from '../components/common/FilterButton';
import Button from '../components/common/Button';
import { BiSolidEditAlt } from 'react-icons/bi';
import { IoTrash } from 'react-icons/io5';
import VoteButton from '../components/common/VoteButton';
import CommentsBox from '../components/pages/feedbackPage/CommentsBox';
import AddComment from '../components/pages/feedbackPage/AddComment';
import { useParams, useSearchParams } from 'react-router-dom';
import { getAllFeedbacks } from '../utilities/getAllFeedbacks';
import useGetFeedbacks from '../hooks/feedbacks/useGetFeedbacks';
import FullSpinnerPage from '../pages/FullSpinnerPage';
import { formatString } from '../utilities/helpers';
import useGetCompany from '../hooks/company/useGetCompany';
// import useDeleteFeedback from '../hooks/feedbacks/useDeleteFeedback';
// import MiniSpinner from '../components/common/MiniSpinner';
import useUpdateFeedback from '../hooks/feedbacks/useUpdateFeedback';
import ModalWindow from '../components/common/ModalWindow';
import EditForm from './EditForm';
import { useDispatch, useSelector } from 'react-redux';
import { openEditForm } from '../slices/modalWindowSlice';
import { FeedbackObject, States } from '../types/types';
import useResponsiveDesign from '../hooks/other/useResponsiveDesign';
import toast from 'react-hot-toast';

function FeedbackDetail() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('company');
  const { isPending, getFeedbacks } = useGetFeedbacks();
  const { feedbackID } = useParams();
  const { isAuthenticated, companyData } = useGetCompany();
  // const { isDeleting, deleteFeedback } = useDeleteFeedback();
  const { isUpdating, updateFeedback } = useUpdateFeedback();
  const editForm = useSelector((state: States) => state.modalWindow.editForm);
  const { smallScreen } = useResponsiveDesign();
  const dispatch = useDispatch();
  if (!id || !getFeedbacks) return;
  const companyID = id?.slice(-36);
  const allFeedbacks: FeedbackObject[] =
    getAllFeedbacks(id, getFeedbacks) || [];

  const getFeedbackItem = allFeedbacks?.find(
    (item) => String(item.id) === String(feedbackID)
  );

  if (!getFeedbackItem) return;

  const {
    title,
    category,
    upvotes,
    description,
    comments,
    status,
  }: FeedbackObject = getFeedbackItem;

  function handleDelete() {
    // const feedbackItem = allFeedbacks?.filter(
    //   (item) => item?.id !== getFeedbackItem?.id
    // );
    if (isAuthenticated && matchPage) {
      // deleteFeedback({ companyID, feedbackItem });
      toast.error('Deletion is disabled for security reasons!');
    }
  }

  const matchPage = companyData?.id === companyID;

  function handleFeedbackStatus(status: string) {
    const findIndex = allFeedbacks?.findIndex(
      (item: { id: string | number }) =>
        Number(item.id) === Number(getFeedbackItem?.id)
    );

    if (!getFeedbackItem) return;

    const newFeedbacks: FeedbackObject[] = allFeedbacks?.slice();
    newFeedbacks?.splice(findIndex, 1, { ...getFeedbackItem, status: status });

    updateFeedback({
      companyID,
      feedbackItem: [...newFeedbacks],
    });
  }

  if (isPending) return <FullSpinnerPage />;

  return (
    <>
      <Section>
        <div className={styles.container}>
          <div className={styles.goBackContainer}>
            <GoBack />
            {isAuthenticated && matchPage && (
              <div className={styles.buttonsContainer}>
                {!smallScreen && (
                  <Button
                    style='edit'
                    handleClick={() => dispatch(openEditForm())}
                  >
                    <BiSolidEditAlt />
                  </Button>
                )}
                <Button
                  style='delete'
                  handleClick={handleDelete}
                  // disabled={isDeleting}
                >
                  {/* {isDeleting ? <MiniSpinner space={false} /> : <IoTrash />} */}
                  <IoTrash />
                </Button>
              </div>
            )}
          </div>

          <div className={styles.mainBox}>
            <div className={styles.feedbackContent}>
              <div>
                <FilterButton fixed='true'>
                  {formatString(category)}
                </FilterButton>
                <p>{formatString(title)}</p>

                <div className={styles.voteContainer}>
                  <VoteButton
                    showNumber={false}
                    votes={upvotes}
                    id={Number(feedbackID)}
                  />
                </div>
              </div>

              <p>{formatString(description)}</p>
            </div>

            {isAuthenticated && matchPage && (
              <div className={styles.categoryContainer}>
                {['Suggestion', 'Planned', 'In - Progress', 'Released'].map(
                  (item) => (
                    <button
                      key={item}
                      className={
                        status.toLowerCase() === item.toLowerCase()
                          ? `${styles.categoryButton} ${styles.active}`
                          : styles.categoryButton
                      }
                      onClick={() => handleFeedbackStatus(item)}
                      disabled={isUpdating}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          {comments?.length > 0 && (
            <div className={styles.commentsContainer}>
              <CommentsBox comments={comments} />
            </div>
          )}

          <div className={styles.addComments}>
            {getFeedbackItem?.status.toLowerCase() === 'released' ||
            getFeedbackItem?.status.toLowerCase() === 'in - progress' ? (
              <p className={styles.feedbackClosed}>
                This feedback is no longer available.{' '}
                <span>{getFeedbackItem?.status.toLowerCase()}</span>
              </p>
            ) : (
              <AddComment />
            )}
          </div>
        </div>
      </Section>
      {editForm && (
        <ModalWindow>
          <EditForm />
        </ModalWindow>
      )}
    </>
  );
}

export default FeedbackDetail;
