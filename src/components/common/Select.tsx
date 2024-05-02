import styles from '../../styles/components/Select.module.css';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface Props {
  options: string[];
  formStyle?: boolean;
}

function Select({ options, formStyle = false }: Props) {
  const [toggleSelect, setToggleSelect] = useState(false);
  const [value, setValue] = useState(options[0]);

  function handleSelect(e: React.FormEvent) {
    e.preventDefault();
    setToggleSelect((toggle) => !toggle);
  }

  function handleSelectValue(chosenValue: string) {
    setValue(chosenValue);
  }

  return (
    <div className={styles.container}>
      <button
        className={
          formStyle ? `${styles.formStyle} ${styles.select}` : styles.select
        }
        onClick={handleSelect}
      >
        {value}
        <span>
          <IoIosArrowDown />
        </span>
      </button>

      {toggleSelect && (
        <ul
          className={
            formStyle
              ? `${styles.formOptionsContainer} ${styles.optionsContainer}`
              : styles.optionsContainer
          }
        >
          {options.map((item) => (
            <li className={styles.option} key={item}>
              <button
                className={value === item ? styles.active : ''}
                onClick={(e) => {
                  handleSelectValue(item);
                  handleSelect(e);
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
