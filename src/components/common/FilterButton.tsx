import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/components/FilterButton.module.css';
import { setFilter } from '../../slices/sortSlice';
import { States } from '../../types/types';

interface Props {
  children: React.ReactNode;
  fixed?: string;
  item?: string;
}

function FilterButton({ children, fixed, item }: Props) {
  const dispatch = useDispatch();
  const filter = useSelector((state: States) => state.sortBy.filter);
  const active = item === filter;

  function handleOnClick() {
    dispatch(setFilter(item));
  }

  return (
    <button
      className={`${
        fixed ? styles.fixed : `${styles.button} ${active ? styles.active : ''}`
      }`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
}

export default FilterButton;
