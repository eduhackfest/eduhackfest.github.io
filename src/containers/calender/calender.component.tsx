import { useContext, useEffect } from 'react';
import { calenderContext } from '../../Context/calender.context';
import { CALENDER_VIEW } from '../../constants';
import { Flexbox } from '../../elements/Flexbox';
import { calenderMainLogic } from './calender.function';
import CalenderLayout from './calender.layout';
import './styles.css';
import * as H from './style';
import { AnimatePresence, motion } from 'framer-motion';

const CalenderView = () => {
  const contextTesting = useContext(calenderContext);
  const {state, dispatch} = contextTesting;
  return (
    <div className="card-body">
      {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((day, j) => (
        <Flexbox key={j} alignCenter justifyCenter className="card-body-header">
          <p style={{color: '#182B49'}}><b>{day}</b></p>
        </Flexbox>
      ))}
      {state.dates.map((day: any, j: any) => (
        <Flexbox
          alignCenter
          justifyCenter
          className={
            day.dumpDay
              ? 'card-body-inner'
              : 'card-body-inner card-body-inner__active'
          }
          onClick={() => {
            if (day.event) {
              dispatch({type: 'UPDATE_CALENDER_VIEW', data: 2});
              dispatch({
                type: 'SHOW_EVENTS_FOR_SELECTED_DATE',
                data: state.dates[j].events
              });
            } else {
              alert('No hay ningún evento programado para este día');
            }
          }}
          key={j}
        >
          {day.event ? (
            <p className="card-body-inner__active__event">{day.day}</p>
          ) : (
            <p>{day.day}</p>
          )}
        </Flexbox>
      ))}
    </div>
  );
};

const EventsView = () => {
  const contextTesting = useContext(calenderContext);
  const {state} = contextTesting as any;
  return (
    <H.EventContainer style={{overflowX: 'hidden'}}>
      {state.selectedData.map((event: any, j: number) => (
        <H.Event style={{cursor: event.link ? 'pointer' : ''}}
          key={j}
          onClick={() => {
            if (event.link) window.open(event.link, '_blank');
          }}
        >
          <div className="event-subcard">
            <h3 style={{color: '#182B49'}}>{event.title}</h3>
            <p>{event.timings}</p>
          </div>
          {/* <button>Añadir al calendario</button> */}
        </H.Event>
      ))}
    </H.EventContainer>
  );
};

export const Calender = ({data}: any) => {
  const contextTesting = useContext(calenderContext);
  const {state, dispatch} = contextTesting;

  useEffect(() => {
    calenderMainLogic(state, dispatch, data);
  }, [state.month]);

  return (
    <CalenderLayout
      handleActionProcced={
        state.index === CALENDER_VIEW
          ? {type: 'MONTH_FORWARD'}
          : {type: 'DISABLED'}
      }
      handleActionBack={
        state.index === CALENDER_VIEW
          ? {type: 'MONTH_BACKWARD'}
          : {type: 'UPDATE_CALENDER_VIEW', data: 1}
      }
    >
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={state.index ?? 'empty'}
          initial={{y: 10, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          exit={{y: -1, opacity: 0}}
          transition={{duration: 0.2}}
        >
          {state.index === CALENDER_VIEW ? <CalenderView /> : <EventsView />}
        </motion.div>
      </AnimatePresence>
    </CalenderLayout>
  );
};
