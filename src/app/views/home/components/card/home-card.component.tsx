// components
import { Link } from 'react-router-dom';
// types
import { HomeCardProps } from './come-card.component.types';
// constants
import intlConstants from '@/app/intl/constants/intl.constants';
// styles
import classes from './home-card.module.css';

export const HomeCard = ({ icon, title, subtitle, anchor }: HomeCardProps) => {
  return (
    <article className={classes.article}>
      <hgroup>
        <h2>
          <span aria-hidden="true">{icon}</span>
          <span>{title}</span>
        </h2>
        <p>{subtitle}</p>
      </hgroup>
      <Link
        className={classes.link}
        to={anchor.to}
        aria-label={
          anchor.ariaLabel || `${intlConstants.actions.view} ${title}`
        }
      />
    </article>
  );
};
