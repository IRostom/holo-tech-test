import { Repository } from '../../interfaces/repositories.interface';
import './repositoryCard.scss';

export const RepositoryCard = ({ repo }: { repo: Repository }) => {
  return (
    <a
      href="https://github.com/Nexmo/nexmo-java"
      className="github-card"
      data-github="Nexmo/nexmo-java"
    >
      <h3>nexmo-java</h3>
      <p>Nexmo REST API client for Java</p>
      <span className="github-card__meta">
        <span className="github-card__language-icon" style={{ color: 'green' }}>
          ●
        </span>{' '}
        Java
      </span>
      <span className="github-card__meta">
        <i className="fa fa-star" aria-hidden="true"></i>
        <span data-stars>
          <i className="fa fa-spinner" aria-hidden="true">
            84
          </i>
        </span>
      </span>
      <span className="github-card__meta">
        <i className="fa fa-code-fork" aria-hidden="true">
          3
        </i>
        <span data-forks>
          <i className="fa fa-spinner" aria-hidden="true"></i>
        </span>
      </span>
    </a>
  );
};
