import styles from '../../../styles/components/RoadMapHeader.module.css';
import { useParams } from 'react-router-dom';
import Button from '../../common/Button';
import { FaPlus } from 'react-icons/fa6';
import useResponsiveDesign from '../../../hooks/other/useResponsiveDesign';

function RoadMapHeader() {
  const { roadID } = useParams();
  const id = roadID?.slice(-36);
  const { smallScreen } = useResponsiveDesign();
  if (!id) return;

  return (
    <div className={styles.header}>
      <div>
        <img src='/icons/roadmap.png' alt='roadmap icon' draggable={false} />
        <h1>Roadmap</h1>
      </div>

      <Button path={`/feedback/form?company=${id}`}>
        <FaPlus style={{ fontSize: '1.2rem' }} />{' '}
        {!smallScreen && 'Add Feedback'}
      </Button>
    </div>
  );
}

export default RoadMapHeader;
