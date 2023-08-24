import { faCodeFork, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Repository } from '../../interfaces/repositories.interface';
import './repositoryCard.scss';

export const RepositoryCard = ({ repo }: { repo: Repository }) => {
  return (
    <a
      href={repo.html_url}
      className="github-card"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <span className="github-card__meta">
        <span className="github-card__language-icon" style={{ color: 'green' }}>
          ●
        </span>{' '}
        {repo.language}
      </span>
      <span className="github-card__meta">
        <i className="fa fa-star" aria-hidden="true"></i>
        <FontAwesomeIcon icon={faStar} />
        <span>
          <i className="fa fa-spinner" aria-hidden="true">
            {repo.stargazers_count}
          </i>
        </span>
      </span>
      <span className="github-card__meta">
        <i className="fa fa-code-fork" aria-hidden="true">
          <FontAwesomeIcon icon={faCodeFork} />
          {repo.forks_count}
        </i>
        <span>
          <i className="fa fa-spinner" aria-hidden="true"></i>
        </span>
      </span>
    </a>
  );
};
