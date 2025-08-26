import * as React from 'react';
import { Progress } from '@base-ui-components/react/progress';
import styles from '../index.module.css';
import { HandlerScroll } from './StyledComponent/ModalWindow.style';
import { useEffect, useState } from 'react';

export default function ExampleProgress() {
  const [value, setValue] = React.useState(20);
  const [slideMove, setSlideMove] = useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((current) => Math.min(100, Math.round(current + Math.random() * 25)));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (value === 100) {
      setSlideMove(true);
    }
  }, [value]);

  return (
    <>
      <HandlerScroll stateMove={slideMove}>
        <Progress.Root className={styles.Progress} value={value}>
          <Progress.Label className={styles.Label}>Export data</Progress.Label>
          <Progress.Value className={styles.Value} />
          <Progress.Track className={styles.Track}>
            <Progress.Indicator className={styles.Indicator} />
          </Progress.Track>
        </Progress.Root>
      </HandlerScroll>
    </>
  );
}
