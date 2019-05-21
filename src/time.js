import React from 'react';

export default function Timer({time}) {
  let hms={
      h: Math.floor(time/3600000),
      m: Math.floor((time/1000%3600)/60),
      s: time/1000%60
  }
  return (
    
      <div className="numbers">
        <p className="time h">{hms.h.toString().length>=2?hms.h:("00" + hms.h).slice(-2)}</p>
        <p className="time">:</p>
        <p className="time m">{("00" + hms.m).slice(-2)}</p>
        <p className="time">:</p>
        <p className="time s">{("00" + hms.s).slice(-2)}</p>
      </div>

  );
}