import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Promotion from 'components/Promotion/Promotion';
import Shop from 'modules/Shop/components/Shop/Shop';

import './homePage.scss';

const HomePage = () => {
  return (
    <>
      <Header />
      <Promotion />
      <Shop />
      <Footer />
    </>
  );
};

export default HomePage;
