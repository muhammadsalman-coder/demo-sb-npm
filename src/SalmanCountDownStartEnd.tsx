import React from 'react';

interface setTimerInterface {
  d?: number;
  h?: number;
  m?: number;
  s?: number;
  start?: false;
  end?: false;
}
export interface SalmanCountDownStartEndInterface {
  endDateTime?: number | string;
  startDateTime?: number | string;
  timerEndText?: string;
  timerStartText?: string;
  timerStartSize?: string;
  gap?: number;
  color?: string;
  timeHeadinSize?: string;
  timeTextSize?: string;
  timerEndSize?: string;
}
const SalmanCountDownStartEnd = ({
  endDateTime = 1606874812000,
  startDateTime = 1606874810000,
  timerStartText = 'Start On: ',
  timerEndText = 'Times Up!!',
  timerEndSize,
  timerStartSize,
  gap = 30,
  color = '#000',
  timeHeadinSize,
  timeTextSize,
}: SalmanCountDownStartEndInterface) => {
  const calculateTimeLeft = (): setTimerInterface => {
    // for start time
    const startDifference = +new Date(startDateTime) - +new Date();
    let timeLeft = {};
    if (startDifference > 0) {
      timeLeft = {
        d: Math.floor(startDifference / (1000 * 60 * 60 * 24)),
        h: Math.floor(
          (startDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        m: Math.floor((startDifference % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((startDifference % (1000 * 60)) / 1000),
        start: false,
        end: false,
      };
    } else {
      // for end time
      const endDifference = +new Date(endDateTime) - +new Date();

      if (endDifference > 0) {
        timeLeft = {
          d: Math.floor(endDifference / (1000 * 60 * 60 * 24)),
          h: Math.floor(
            (endDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          m: Math.floor((endDifference % (1000 * 60 * 60)) / (1000 * 60)),
          s: Math.floor((endDifference % (1000 * 60)) / 1000),
          start: true,
          end: false,
        };
      } else {
        timeLeft = { ...timeLeft, start: true, end: true };
      }
    }

    return timeLeft;
  };

  const [timer, setTimer] = React.useState<setTimerInterface>(
    calculateTimeLeft()
  );
  const startIntervalRef = React.useRef<any>();
  React.useEffect(() => {
    clearInterval(startIntervalRef.current);
    const timerInterval = setInterval(() => {
      setTimer(calculateTimeLeft());
      const difference = +new Date(endDateTime) - +new Date();

      if (difference <= 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
    startIntervalRef.current = timerInterval;
  }, [endDateTime, startDateTime]);

  return (
    <div className="salmanCountDownStartEnd-root">
      {timer?.start ? (
        !timer?.end ? (
          <div
            style={{
              display: 'flex',
              gap,
              textAlign: 'center',
              color,
            }}
            className="salmanCountDownStartEnd-counter-container"
          >
            <div className="salmanCountDownStartEnd-counter-item">
              <h2 style={{ fontSize: timeHeadinSize }}>{timer.d}</h2>
              <p style={{ fontSize: timeTextSize }}>Days</p>
            </div>
            <div className="salmanCountDownStartEnd-counter-item">
              <h2 style={{ fontSize: timeHeadinSize }}>{timer.h}</h2>
              <p style={{ fontSize: timeTextSize }}>Hours</p>
            </div>
            <div className="salmanCountDownStartEnd-counter-item">
              <h2 style={{ fontSize: timeHeadinSize }}>{timer.m}</h2>
              <p style={{ fontSize: timeTextSize }}>Minutes</p>
            </div>
            <div className="salmanCountDownStartEnd-counter-item">
              <h2 style={{ fontSize: timeHeadinSize }}>{timer.s}</h2>
              <p style={{ fontSize: timeTextSize }}>Second</p>
            </div>
          </div>
        ) : (
          <h2
            style={{
              color,
              fontSize: timerEndSize ? timerEndSize : timeTextSize,
            }}
          >
            {timerEndText ? timerEndText : 'Timer Ended'}
          </h2>
        )
      ) : (
        <h2
          style={{
            color,
            fontSize: timerStartSize ? timerStartSize : timeTextSize,
          }}
        >
          {timerStartText + ' ' + new Date(startDateTime).toUTCString()}
        </h2>
      )}
    </div>
  );
};

export { SalmanCountDownStartEnd };
