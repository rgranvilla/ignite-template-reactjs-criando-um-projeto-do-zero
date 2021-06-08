import { GetStaticProps } from 'next';
import Head from 'next/head';

import { FiCalendar, FiUser } from 'react-icons/fi';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | Spacetraveling</title>
      </Head>
      <main className={styles.contentContainer}>
        <div className={styles.posts}>
          <a href="/" className={styles.postContent}>
            <strong>Como utilizar Hooks</strong>
            <p>Pensando em sincronização em vez de ciclos de vida.</p>
            <footer className={styles.postFooter}>
              <div className={styles.postTime}>
                <FiCalendar />
                <time>15 Abr 2021</time>
              </div>
              <div className={styles.postAuthor}>
                <FiUser />
                <span>Danilo Vieira</span>
              </div>
            </footer>
          </a>
          <a href="/" className={styles.postContent}>
            <strong>Criando um app CRA do zero</strong>
            <p>
              Tudo sobre como criar a sua primeira aplicação utilizando Create
              React App.
            </p>
            <footer className={styles.postFooter}>
              <div className={styles.postTime}>
                <FiCalendar />
                <time>19 Abr 2021</time>
              </div>
              <div className={styles.postAuthor}>
                <FiUser />
                <span>Danilo Vieira</span>
              </div>
            </footer>
          </a>
          <a href="/" className={styles.postContent}>
            <strong>Como utilizar Hooks</strong>
            <p>Pensando em sincronização em vez de ciclos de vida.</p>
            <footer className={styles.postFooter}>
              <div className={styles.postTime}>
                <FiCalendar />
                <time>15 Abr 2021</time>
              </div>
              <div className={styles.postAuthor}>
                <FiUser />
                <span>Danilo Vieira</span>
              </div>
            </footer>
          </a>
          <a href="/" className={styles.postContent}>
            <strong>Criando um app CRA do zero</strong>
            <p>
              Tudo sobre como criar a sua primeira aplicação utilizando Create
              React App.
            </p>
            <footer className={styles.postFooter}>
              <div className={styles.postTime}>
                <FiCalendar />
                <time>19 Abr 2021</time>
              </div>
              <div className={styles.postAuthor}>
                <FiUser />
                <span>Danilo Vieira</span>
              </div>
            </footer>
          </a>
          <a href="/" className={styles.postContent}>
            <strong>Como utilizar Hooks</strong>
            <p>Pensando em sincronização em vez de ciclos de vida.</p>
            <footer className={styles.postFooter}>
              <div className={styles.postTime}>
                <FiCalendar />
                <time>15 Abr 2021</time>
              </div>
              <div className={styles.postAuthor}>
                <FiUser />
                <span>Danilo Vieira</span>
              </div>
            </footer>
          </a>
          <div className={styles.loaderButton}>
            <a href="/">Carregar mais posts</a>
          </div>
        </div>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
