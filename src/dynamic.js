import React from 'react';
import { Button } from 'reactstrap';
import Timer from './time'

export default class Dynamic extends React.Component {

    render() {
      return (
        <div className="background">
                <Timer time={1800000} />
            <div className='time-l'>
               <p className='heure'> Hour </p>
               <p className='minute'> Minute </p>
               <p className='seconde'> second </p>
            </div>
            <div className='butt'>
                <Button outline color="success">Start</Button>{' '}
                <Button outline color="secondary">Reset</Button>{' '}
            </div>
        </div>
    )
}

}