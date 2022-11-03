import React from 'react'
import  { useState, useRef, useEffect } from 'react';
export const Task3 = () => {
    const Ref = useRef(null);
	// The state for our timer
	const [timer, setTimer] = useState("00:00:00")

	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
		return {
			total, hours, minutes, seconds
		};
	}
  const d=new Date()
var t = d.getHours() * 60 * 60;
var s = d.getMinutes() *60;
var u = d.getSeconds();

var currentTime1 = t + s + u ;
	const startTimer = (e) => {
		let { total, hours, minutes, seconds }
					= getTimeRemaining(e);
		if (total >= 0) {
			setTimer(
				(hours > 9 ? hours : '0' + hours) + ':' +
				(minutes > 9 ? minutes : '0' + minutes) + ':'
				+ (seconds > 9 ? seconds : '0' + seconds)
			)
		}
	}


	const clearTimer = (e) => {
		// setTimer(new Date());
		if (Ref.current) clearInterval(Ref.current);
		console.log(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
		console.log(id);
	}

	const getDeadTime = () => {
		let deadline = new Date();
    deadline.getHours=
		deadline.setSeconds(currentTime1);
		return deadline;
	}
	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);
	const onClickReset = () => {
		clearTimer(getDeadTime());
	}
  return (
    <div>
        <h2>Task3</h2>
        <b>Q3. Create a count down clock that starts on a button click with current time as start and decrements second by second.</b>
        <h2>{timer}</h2>
			<button className='button' onClick={onClickReset}>Reset</button>
        </div>
  )
}
