import { User } from '../../interfaces/user.interface';
import './userCard.scss';

export const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="card">
      <div className="cover"></div>
      <div className="card-wrapper">
        <a
          href={`https://github.com/${user.login}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id="github-logo"
            src="https://i.ibb.co/frv5pB3/github-logo.png"
            alt="github-logo"
          ></img>
        </a>
        <div className="card-header">
          <div className="card-img-wrapper">
            <img
              src={`https://avatars.githubusercontent.com/${user.login}`}
              alt=""
            />
          </div>
          <h1>
            <a
              className="card-title"
              href={`${user.html_url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.login}
            </a>
          </h1>
          <div className="card-responsename">
            <a href="{user.html_url}" target="_blank" rel="noopener">
              @{user.login}
            </a>
          </div>
          <p className="card-desc">{user.id}</p>
          <div className="card-footer">
            <div className="footer-box">
              <div className="box-wrapper">
                <div className="count">{user.id}</div>
                <div className="box-text">Followers</div>
              </div>
              <div className="box-wrapper">
                <div className="count">{user.id}</div>
                <div className="box-text">Following</div>
              </div>
              <div className="box-wrapper">
                <div className="count">{user.id}</div>
                <div className="box-text">Repositories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
