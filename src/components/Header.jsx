import BackgroundImage from '@/components/BackgroundImage';

const Header = () => {
  return (
    <header>
      <BackgroundImage />

      <h1 className="first-heading">
        Word <span className="first-heading--thin">Analytics</span>
      </h1>
    </header>
  );
};

export default Header;
