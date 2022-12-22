import type { Year, Week } from "../libs/types";
import { peak } from "../libs/stats";

const WIDTH = 200;
const HEIGHT = 150;

const STROKE = HEIGHT * 0.003;

const MARGIN = STROKE / 2;

const HOUR = WIDTH / 24;

const gap = (padding: number) => (HEIGHT - 2 * MARGIN - padding) / 53;

const positionY = (week: number, count: number, padding: number = 0) =>
  padding +
  MARGIN +
  week * gap(padding) -
  (count === 0 ? 0 : Math.log(count) * 3);

const position = (week: number, hour: number, count: number, padding: number) =>
  `${hour * HOUR} ${positionY(week, count, padding)}`;

const controlLeft = (
  week: number,
  hour: number,
  count: number,
  padding: number
) => `${hour * HOUR - 0.5 * HOUR} ${positionY(week, count, padding)}`;

const controlRight = (
  week: number,
  hour: number,
  count: number,
  padding: number
) => `${hour * HOUR + 0.5 * HOUR} ${positionY(week, count, padding)}`;

interface Props {
  year: Year;
}

const Graph = ({ year }: Props) => {
  const padding =
    MARGIN -
    Object.values(year).reduce((min: number, week: Week, index) => {
      const count = Object.values(week).reduce((min: number, count: number) => {
        const position = positionY(index, count);
        return position < min ? position : min;
      }, 0);
      return min < count ? min : count;
    }, 0);

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      style={{
        // We need to hardcode this style for the OG image generation
        width: "100%",
        height: "100%",
      }}
    >
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="0.1%" stop-color="#4ff2d9" />
          <stop offset="5%" stop-color="#4ff2d9" />
          <stop offset="65%" stop-color="#4ff2d9" />
          <stop offset="85%" stop-color="#4ff2d9" />
          <stop offset="95%" stop-color="#828fff" />
        </linearGradient>
      </defs>
      {((Object.entries(year) as unknown) as [number, Week][]).map(
        ([week, hours]) => (
          <path
            fill="transparent"
            stroke-width={STROKE}
            stroke={peak(hours) < 2 ? "#828fff" : "url(#gradient)"}
            key={week}
            d={`M${position(week, 0, hours[0], padding)} ${((Object.entries(
              hours
            ) as unknown) as [number, number][])
              .slice(1)
              .map(
                ([hour, count]) =>
                  `C ${controlRight(
                    week,
                    hour - 1,
                    hours[((hour - 1) as unknown) as keyof Week],
                    padding
                  )}, ${controlLeft(week, hour, count, padding)}, ${position(
                    week,
                    hour,
                    count,
                    padding
                  )}`
              )
              .join(" ")}`}
          />
        )
      )}
    </svg>
  );
};

export default Graph;
