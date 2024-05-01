import styles from '../../styles/components/FilterButton.module.css';

interface Props {
  children: React.ReactNode;
  fixed?: string;
}

function FilterButton({ children, fixed }: Props) {
  return (
    <button className={`${fixed ? styles.fixed : styles.button}`}>
      {children}
    </button>
  );
}

export default FilterButton;
