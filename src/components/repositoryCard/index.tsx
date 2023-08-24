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
      <div className="github-card__meta-list">
        <span className="github-card__meta">
          <span
            className="github-card__language-icon"
            style={{ color: 'green' }}
          >
            ●
          </span>{' '}
          {repo.language}
        </span>
        <span className="github-card__meta">
          <FontAwesomeIcon icon={faStar} />
          <span>{repo.stargazers_count}</span>
        </span>
        <span className="github-card__meta">
          <FontAwesomeIcon icon={faCodeFork} />
          {repo.forks_count}
        </span>
      </div>
    </a>
  );
};
