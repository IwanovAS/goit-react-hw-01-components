import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(stat => {
          return (
            <StatisticsItem
              key={stat.id}
              label={stat.label}
              percentage={stat.percentage}
            ></StatisticsItem>
          );
        })}
      </ul>
    </section>
  );
};
