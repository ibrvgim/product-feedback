import styles from '../styles/ui/FeedbackForm.module.css';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import GoBack from '../components/common/GoBack';

function FeedbackForm() {
  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.goBackContainer}>
          <GoBack />
        </div>

        <div className={styles.formContainer}>
          <img
            className={styles.formIcon}
            src='/icons/form.png'
            alt='form icon'
            draggable={false}
          />
          <h1>Create New Feedback</h1>

          <form>
            <div>
              <label htmlFor='title'>
                Feedback Title <span>Fill the area</span>
              </label>
              <input
                // className={styles.invalidInput}
                id='title'
                type='text'
                placeholder='Add a short descriptive title'
              />
            </div>

            <div>
              <label htmlFor='category'>
                Feedback Category <span>Fill the area</span>
              </label>
              <input
                // className={styles.invalidInput}
                id='category'
                type='text'
                placeholder='Choose a category for your feedback'
              />
            </div>

            <div>
              <label htmlFor='details'>
                Feedback Details <span>Fill the area</span>
              </label>
              <textarea
                // className={styles.invalidInput}
                id='details'
                name='details'
                rows={5}
                placeholder='Include any specific comments on what should be improved, added, etc.'
              />
            </div>

            <div className={styles.buttonsContainer}>
              <Button style='secondary'>Cancel</Button>
              <Button>Add Feedback</Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}

export default FeedbackForm;
