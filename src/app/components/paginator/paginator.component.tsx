// vendors
import { useIntl } from 'react-intl';
// hooks
import { UsePagedRepositoryValue } from '@/app/hooks/use-paged-repository/use-paged-repisitory.hook.types';
// constants
import intlConstants from '@/app/intl/constants/intl.constants';
// styles
import layoutStyles from '@/app/styles/layout.module.css';

export const Paginator = ({
  hasNext,
  hasPrevious,
  next,
  previous,
  ariaControls,
  ariaLabel,
}: Pick<
  UsePagedRepositoryValue<unknown>,
  'hasPrevious' | 'hasNext' | 'previous' | 'next'
> & {
  ariaControls: string;
  ariaLabel: string;
}) => {
  const { formatMessage } = useIntl();

  return (
    <div
      role="group"
      aria-live="polite"
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      className={layoutStyles.group}
    >
      <button
        onClick={previous}
        disabled={!hasPrevious}
        aria-disabled={!hasPrevious}
      >
        {formatMessage({ id: intlConstants.pagination.previous })}
      </button>
      <button onClick={next} disabled={!hasNext} aria-disabled={!hasNext}>
        {formatMessage({ id: intlConstants.pagination.next })}
      </button>
    </div>
  );
};
