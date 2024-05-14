import styles from '../../../styles/components/FeedbacksHeader.module.css';
import Button from '../../common/Button';
import { FaPlus } from 'react-icons/fa6';
import Select from '../../common/Select';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useGetFeedbacks from '../../../hooks/feedbacks/useGetFeedbacks';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../../slices/sortSlice';
import { getFeedbacksByFilter } from '../../../utilities/getFeedbacksByFilter';
import { States } from '../../../types/types';
import useResponsiveDesign from '../../../hooks/other/useResponsiveDesign';

function FeedbacksHeader() {
  const { id } = useParams();
  const [sort, setSort] = useState('Most votes');
  const { getFeedbacks } = useGetFeedbacks();
  const filter = useSelector((state: States) => state.sortBy.filter);
  const { smallScreen } = useResponsiveDesign();

  const dispatch = useDispatch();
  dispatch(setValue(sort));

  if (!id || !getFeedbacks) return;

  const allFeedbacks = getFeedbacksByFilter(
    id.slice(-36),
    getFeedbacks,
    filter
  );

  return (
    <div className={styles.header}>
      <div>
        <img
          className={styles.icon}
          src='/icons/idea.png'
          alt='idea icon'
          draggable={false}
        />
        {Number(allFeedbacks?.length) > 0 && (
          <h3>
            {allFeedbacks?.length}{' '}
            {Number(allFeedbacks?.length) === 1 ? 'Suggestion' : 'Suggestions'}
          </h3>
        )}

        {Number(allFeedbacks?.length) === 0 && <h3>No Suggestions</h3>}
        <div className={styles.sort}>
          <span>Sort by:</span>
          <Select
            value={sort}
            setValue={setSort}
            options={['Most votes', 'Least votes']}
          />
        </div>
      </div>

      <Button path={`/feedback/form?company=${id}`}>
        <FaPlus style={{ fontSize: '1.2rem' }} />{' '}
        {!smallScreen && 'Add Feedback'}
      </Button>
    </div>
  );
}

export default FeedbacksHeader;
