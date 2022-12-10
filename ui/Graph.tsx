import { getHours, getWeek } from "date-fns";
import Card from "./Card";
import styles from "./Graph.module.css";

interface Week {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
  10: number;
  11: number;
  12: number;
  13: number;
  14: number;
  15: number;
  16: number;
  17: number;
  18: number;
  19: number;
  20: number;
  21: number;
  22: number;
  23: number;
  24: number;
}

interface Year {
  0: Week;
  1: Week;
  2: Week;
  3: Week;
  4: Week;
  5: Week;
  6: Week;
  7: Week;
  8: Week;
  9: Week;
  10: Week;
  11: Week;
  12: Week;
  13: Week;
  14: Week;
  15: Week;
  16: Week;
  17: Week;
  18: Week;
  19: Week;
  20: Week;
  21: Week;
  22: Week;
  23: Week;
  24: Week;
  25: Week;
  26: Week;
  27: Week;
  28: Week;
  29: Week;
  30: Week;
  31: Week;
  32: Week;
  33: Week;
  34: Week;
  35: Week;
  36: Week;
  37: Week;
  38: Week;
  39: Week;
  40: Week;
  41: Week;
  42: Week;
  43: Week;
  44: Week;
  45: Week;
  46: Week;
  47: Week;
  48: Week;
  49: Week;
  50: Week;
  51: Week;
  52: Week;
  53: Week;
}

const initializeWeek = (): Week => ({
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
  13: 0,
  14: 0,
  15: 0,
  16: 0,
  17: 0,
  18: 0,
  19: 0,
  20: 0,
  21: 0,
  22: 0,
  23: 0,
  24: 0,
});

const initializeYear = (): Year => ({
  0: initializeWeek(),
  1: initializeWeek(),
  2: initializeWeek(),
  3: initializeWeek(),
  4: initializeWeek(),
  5: initializeWeek(),
  6: initializeWeek(),
  7: initializeWeek(),
  8: initializeWeek(),
  9: initializeWeek(),
  10: initializeWeek(),
  11: initializeWeek(),
  12: initializeWeek(),
  13: initializeWeek(),
  14: initializeWeek(),
  15: initializeWeek(),
  16: initializeWeek(),
  17: initializeWeek(),
  18: initializeWeek(),
  19: initializeWeek(),
  20: initializeWeek(),
  21: initializeWeek(),
  22: initializeWeek(),
  23: initializeWeek(),
  24: initializeWeek(),
  25: initializeWeek(),
  26: initializeWeek(),
  27: initializeWeek(),
  28: initializeWeek(),
  29: initializeWeek(),
  30: initializeWeek(),
  31: initializeWeek(),
  32: initializeWeek(),
  33: initializeWeek(),
  34: initializeWeek(),
  35: initializeWeek(),
  36: initializeWeek(),
  37: initializeWeek(),
  38: initializeWeek(),
  39: initializeWeek(),
  40: initializeWeek(),
  41: initializeWeek(),
  42: initializeWeek(),
  43: initializeWeek(),
  44: initializeWeek(),
  45: initializeWeek(),
  46: initializeWeek(),
  47: initializeWeek(),
  48: initializeWeek(),
  49: initializeWeek(),
  50: initializeWeek(),
  51: initializeWeek(),
  52: initializeWeek(),
  53: initializeWeek(),
});

const WIDTH = 200;
const HEIGHT = 150;

const STROKE = HEIGHT * 0.003;

const OFFSET = 0.1 * HEIGHT;
const MARGIN = 0.1 * HEIGHT;
const PEAK = 0.1 * HEIGHT;

const GAP = (HEIGHT - 2 * MARGIN - OFFSET) / 52;
const HOUR = (WIDTH - 2 * MARGIN) / 24;

const position = (maximum: number) => (
  week: number,
  hour: number,
  count: number
) =>
  `${hour * HOUR + MARGIN} ${
    MARGIN + OFFSET + week * GAP - (count / maximum) * PEAK
  }`;

const controlLeft = (maximum: number) => (
  week: number,
  hour: number,
  count: number
) =>
  `${hour * HOUR + MARGIN - 0.5 * HOUR} ${
    MARGIN + OFFSET + week * GAP - (count / maximum) * PEAK
  }`;

const controlRight = (maximum: number) => (
  week: number,
  hour: number,
  count: number
) =>
  `${hour * HOUR + MARGIN + 0.5 * HOUR} ${
    MARGIN + OFFSET + week * GAP - (count / maximum) * PEAK
  }`;

interface Props {
  contributions: Array<Date>;
}

const Graph = ({ contributions }: Props) => {
  const year: Year = initializeYear();

  contributions.forEach((date) => {
    const week = (getWeek(date) as unknown) as keyof Year;
    const hour = (getHours(date) as unknown) as keyof Week;

    year[week][hour] += 1;
  });

  const maximum: number = Object.values(year).reduce(
    (max: number, year: Week) => {
      const count = Object.values(year).reduce(
        (max: number, count: number) => (count > max ? count : max),
        0
      );

      return max > count ? max : count;
    },
    0
  );

  const point = position(maximum);
  const control1 = controlRight(maximum);
  const control2 = controlLeft(maximum);

  return (
    <Card>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className={styles.svg}>
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0.1%" stop-color="#ffffff" />
            <stop offset="5%" stop-color="#ffdd2b" />
            <stop offset="65%" stop-color="#ffa804" />
            <stop offset="85%" stop-color="#ff7a03" />
            <stop offset="95%" stop-color="#ff4c04" />
          </linearGradient>
        </defs>
        {((Object.entries(year) as unknown) as [number, Week][]).map(
          ([week, hours]) => (
            <path
              fill="transparent"
              stroke-width={STROKE}
              stroke="url(#gradient)"
              key={week}
              d={`M${point(week, 0, hours[0])} ${((Object.entries(
                hours
              ) as unknown) as [number, number][])
                .slice(1)
                .map(
                  ([hour, count]) =>
                    `C ${control1(
                      week,
                      hour - 1,
                      hours[((hour - 1) as unknown) as keyof Week]
                    )}, ${control2(week, hour, count)}, ${point(
                      week,
                      hour,
                      count
                    )}`
                )
                .join(" ")}`}
            />
          )
        )}
      </svg>
    </Card>
  );
};

export default Graph;
