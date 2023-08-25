import { RepositoryCard, UserCard } from '..';
import { Repositories, Repository, User, Users } from '../../interfaces';
import './gridResult.scss';

export const GridResult = ({
  result,
  filterType,
}: {
  result: Users | Repositories;
  filterType: string;
}) => {
  return (
    result && (
      <>
        <ul className={`grid ${filterType === 'users' ? '' : 'grid-sm'}`}>
          {result?.items?.map((item: User | Repository) =>
            filterType === 'users' ? (
              <UserCard key={item?.id} user={item as User} />
            ) : (
              <RepositoryCard key={item?.id} repo={item as Repository} />
            )
          )}
        </ul>
      </>
    )
  );
};
