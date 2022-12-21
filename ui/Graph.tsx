import type { Year, Week } from "../libs/types";
import { maximum, weekTotal } from "../libs/stats";

const WIDTH = 200;
const HEIGHT = 150;

const STROKE = HEIGHT * 0.003;

const MARGIN = STROKE / 2;
const PEAK = 0.1 * HEIGHT;

const GAP = (HEIGHT - 2 * MARGIN - PEAK) / 52;
const HOUR = WIDTH / 24;

const position = (maximum: number) => (
  week: number,
  hour: number,
  count: number
) => `${hour * HOUR} ${MARGIN + PEAK + week * GAP - (count / maximum) * PEAK}`;

const controlLeft = (maximum: number) => (
  week: number,
  hour: number,
  count: number
) =>
  `${hour * HOUR - 0.5 * HOUR} ${
    MARGIN + PEAK + week * GAP - (count / maximum) * PEAK
  }`;

const controlRight = (maximum: number) => (
  week: number,
  hour: number,
  count: number
) =>
  `${hour * HOUR + 0.5 * HOUR} ${
    MARGIN + PEAK + week * GAP - (count / maximum) * PEAK
  }`;

interface Props {
  year: Year;
}

const Graph = ({ year }: Props) => {
  const max = maximum(year);

  const point = position(max);
  const control1 = controlRight(max);
  const control2 = controlLeft(max);

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
            stroke={weekTotal(hours) > 0 ? "url(#gradient)" : "#828fff"}
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
  );
};

export default Graph;
