import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from '../todo/components/AppContent';
import AppHeader from '../todo/components/AppHeader';
import PageTitle from '../todo/components/PageTitle';
import styles from '../todo/styles/modules/app.module.scss';

function Todo() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO List</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default Todo;
