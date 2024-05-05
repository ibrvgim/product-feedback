import styles from '../styles/ui/UserDataForm.module.css';
import Button from '../components/common/Button';
import { FiAtSign } from 'react-icons/fi';

function UserDataForm() {
  return (
    <div className={styles.container}>
      <img
        className={styles.userIcon}
        src='/icons/world.png'
        alt='user icon'
        draggable={false}
      />
      <div className={styles.headingContainer}>
        <h1>Personal Information</h1>
        <p>To continue, you must fill out this form.</p>
      </div>

      <form>
        <div>
          <label>
            First Name <span>Fill out the area</span>
          </label>
          <input
            // className={styles.inputsError}
            type='text'
            placeholder='ex. John'
          />
        </div>

        <div>
          <label>
            Last Name <span>Fill out the area</span>
          </label>
          <input
            // className={styles.inputsError}
            type='text'
            placeholder='ex. Smith'
          />
        </div>

        <div>
          <label>
            Nickname <span>Fill out the area</span>
          </label>
          <div className={styles.nicknameContainer}>
            <span>
              <FiAtSign />
            </span>
            <input
              // className={styles.inputsError}
              type='text'
              placeholder='ex. john.smith'
            />
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <Button>Continue</Button>
        </div>
      </form>
    </div>
  );
}

export default UserDataForm;
