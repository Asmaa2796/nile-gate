import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Banner = ({currentPage,bg,sub,to}) => {
  const {t} = useTranslation('global');
    return (
      <div className="banner py-5" style={{ backgroundImage: bg }}>
        <div className="container">
          <ul className="list-unstyled p-0">
            <li>
              <Link to="/">{t('navbar.home')}</Link>
            </li>
            <li>/</li>
            {sub && (
              <>
                <li>
                    <Link to={to}>{sub}</Link>
                </li>
                <li>/</li>
              </>
            )}
            <li>{currentPage}</li>
          </ul>
        </div>
      </div>
    );
}

export default Banner;
