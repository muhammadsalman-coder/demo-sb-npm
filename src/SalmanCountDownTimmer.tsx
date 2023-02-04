import React from 'react';

export interface TimmerStateInterface {
  d: number;
  h: number;
  m: number;
  s: number;
  end?: boolean;
  start?: boolean;
}
export interface SalmanCountDownTimmerInterface {
  endDateTime?: string;
  timerEndText?: string;
  endTextSize?: string;
  gap?: number;
  color?: string;
  timeHeadinSize?: string;
  timeTextSize?: string;
}
const SalmanCountDownTimmer = ({
  endDateTime,
  timerEndText,
  endTextSize,
  gap = 30,
  color = '#000',
  timeHeadinSize,
  timeTextSize,
}: SalmanCountDownTimmerInterface) => {
  const [timer, setTimer] = React.useState<TimmerStateInterface>({
    d: 0,
    h: 0,
    m: 0,
    s: 0,
    end: false,
  });
  var previousIntervalRef = React.useRef<any>();

  React.useEffect(() => {
    if (endDateTime) {
      clearInterval(previousIntervalRef.current);
      var x = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();
        console.log('imageDragdrop -end interval');

        // Find the distance between now and the count down date
        var distance =
          new Date(
            endDateTime && endDateTime !== ''
              ? endDateTime
              : 'Jul 1, 2022 11:02:25'
          ).getTime() - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        setTimer(prev => ({
          ...prev,
          d: days,
          h: hours,
          m: minutes,
          s: seconds,
        }));

        // If the count down is finished, write some text
        if (distance < 0) {
          setTimer(prev => ({ ...prev, d: 0, h: 0, m: 0, s: 0, end: true }));
          clearInterval(x);
        } else {
          setTimer(prev => ({ ...prev, end: false }));
        }
      }, 1000);
      previousIntervalRef.current = x;
    }
  }, [endDateTime]);
  //   console.log('render imageDragdrop');

  return (
    <>
      {!timer?.end ? (
        <div
          style={{
            display: 'flex',
            gap,
            textAlign: 'center',
            color,
          }}
        >
          <div>
            <h2 style={{ fontSize: timeHeadinSize }}>{timer.d}</h2>
            <p style={{ fontSize: timeTextSize }}>Days</p>
          </div>
          <div>
            <h2 style={{ fontSize: timeHeadinSize }}>{timer.h}</h2>
            <p style={{ fontSize: timeTextSize }}>Hours</p>
          </div>
          <div>
            <h2 style={{ fontSize: timeHeadinSize }}>{timer.m}</h2>
            <p style={{ fontSize: timeTextSize }}>Minutes</p>
          </div>
          <div>
            <h2 style={{ fontSize: timeHeadinSize }}>{timer.s}</h2>
            <p style={{ fontSize: timeTextSize }}>Second</p>
          </div>
        </div>
      ) : (
        <h2 style={{ color, fontSize: endTextSize }}>
          {timerEndText ? timerEndText : 'Timer Ended'}
        </h2>
      )}
    </>
  );
};

export { SalmanCountDownTimmer };
