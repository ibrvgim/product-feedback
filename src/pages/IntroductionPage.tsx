import styles from '../styles/pages/IntroductionPage.module.css';
import IntroductionHeader from '../components/pages/introductionPage/IntroductionHeader';
import StepCard from '../components/pages/introductionPage/StepCard';
import Button from '../components/common/Button';
import Footer from '../components/common/Footer';
import { IoMdSearch } from 'react-icons/io';
import { FaLink } from 'react-icons/fa';
import { FaUsers, FaPenFancy } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import ModalWindow from '../components/common/ModalWindow';
import RegistrationForm from '../ui/RegistrationForm';
import LoginForm from '../ui/LoginForm';
import { ModalWindow as ModalWindowType } from '../types/types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FullSpinnerPage from './FullSpinnerPage';
import useSigninCompany from '../hooks/company/useSigninCompany';
import useGetCompany from '../hooks/company/useGetCompany';

function IntroductionPage() {
  const { loginForm, registerForm } = useSelector(
    (state): ModalWindowType => state?.modalWindow
  );
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const { isLogining } = useSigninCompany();
  const { isPending } = useGetCompany();

  function handleSearch() {
    if (input) navigate(`/${input}`);
  }

  if (isLogining) return <FullSpinnerPage />;

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <IntroductionHeader />

          <section id='heading' className={styles.heading}>
            <div>
              <h1>
                Free and easiest way to get <span>feedback</span> from your
                users
              </h1>
              <p>
                Do you have a product and want to receive feedback from users?
                Then you have come to the right place, register your company and
                start getting users' opinions about your product and keep them
                updated with new features.
              </p>

              <div className={styles.searchCompany}>
                <span>
                  <IoMdSearch />
                </span>
                <input
                  type='text'
                  placeholder='Search for a company by unique ID'
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <Button handleClick={handleSearch}>Search</Button>
              </div>
            </div>

            <img
              className={styles.image}
              src='/icons/sign.svg'
              alt='registartion page image'
              draggable={false}
            />
          </section>

          <div className={styles.stepsContainer}>
            <h1>
              Just take <span>three</span> steps
            </h1>

            <div>
              <StepCard
                step={1}
                header='Register'
                detail='Fill out the form and create your company account.'
              />
              <StepCard
                step={2}
                header='Share'
                detail='Share a personal link belonging to your company with users.'
              />
              <StepCard
                step={3}
                header='Collect'
                detail='Start collecting users feedback and manage it easily.'
              />
            </div>
          </div>

          <section id='howItWorks' className={styles.howWorks}>
            <h1>How It Works For Users</h1>

            <div className={styles.howWorksIList}>
              <div className={styles.howWorksItem}>
                <span>
                  <FaPenFancy />
                </span>
                <p>
                  Created company account has a unique ID that will be shown
                  after registration.
                </p>
              </div>

              <div className={styles.howWorksItem}>
                <span>
                  <FaLink />
                </span>
                <p>
                  Account owner can either share a full personal link or just a
                  unique ID that can be searched <a href='#heading'>above</a>{' '}
                  and it will link to the company's personal page.
                </p>
              </div>

              <div className={styles.howWorksItem}>
                <span>
                  <FaUsers />
                </span>
                <p>
                  By doing these steps, the user is taken to the personal page
                  and can leave feedbacks.
                </p>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </section>

      {(loginForm || registerForm) && (
        <ModalWindow>
          {registerForm && <RegistrationForm />}

          {loginForm && !isPending && <LoginForm />}
        </ModalWindow>
      )}
    </>
  );
}

export default IntroductionPage;
