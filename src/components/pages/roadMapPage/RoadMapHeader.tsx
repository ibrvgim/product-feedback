import { useParams } from 'react-router-dom';
import styles from '../../../styles/components/RoadMapHeader.module.css';
import Button from '../../common/Button';
import { FaPlus } from 'react-icons/fa6';

function RoadMapHeader() {
  const { roadID } = useParams();
  const id = roadID?.slice(-36);
  if (!id) return;

  return (
    <div className={styles.header}>
      <div>
        <img src='/icons/roadmap.png' alt='roadmap icon' draggable={false} />
        <h1>Roadmap</h1>
      </div>

      <Button path={`/feedback/form?company=${id}`}>
        <FaPlus style={{ fontSize: '1.2rem' }} /> Add Feedback
      </Button>
    </div>
  );
}

export default RoadMapHeader;
