// 画像をそれぞれimportします。パスに注意してください。
import CoverImage from '../images/cover-image.JPG';
import ProfileImage from '../images/profile-image.JPG';

export const Header = () => {
  return (
    <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
            <h1 className="title-text">YUICHIROU IMAI</h1>
            <h3 className="title-text">former job: Civil servant</h3>
            <ul className="social-icons">
              <li className="icon-link">
                {/* TODO */}
              </li>
              <li className="icon-link">
                {/* TODO */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
