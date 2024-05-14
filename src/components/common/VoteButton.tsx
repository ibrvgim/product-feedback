import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/components/VoteButton.module.css';
import { IoIosArrowUp } from 'react-icons/io';
import { toggleVote } from '../../slices/votesSlice';
import { States } from '../../types/types';

interface Props {
  id: string | number;
  showNumber?: boolean;
  votes: string | number;
}

function VoteButton({ showNumber = true, votes, id }: Props) {
  const dispatch = useDispatch();
  const userData = useSelector((state: States) => state.votes.user);

  const isVotted = userData?.votedFeedbacks.some((item) => item === Number(id));

  function handleVotes() {
    dispatch(toggleVote(id));
  }

  return (
    <button
      className={
        isVotted
          ? `${styles.voteContainer} ${styles.voted}`
          : styles.voteContainer
      }
      onClick={handleVotes}
    >
      <span className={styles.icon}>
        <IoIosArrowUp />
      </span>
      {showNumber && (
        <span className={styles.votesNumber}>
          {isVotted ? Number(votes) + 1 : votes}
        </span>
      )}
    </button>
  );
}

export default VoteButton;
