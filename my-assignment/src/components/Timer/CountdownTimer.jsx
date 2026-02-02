import React, { useState, useEffect, useRef } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Play, Pause, RotateCcw } from 'lucide-react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(0); // in milliseconds
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [inputMinutes, setInputMinutes] = useState(1);
  const intervalRef = useRef(null);
  const [storedState, setStoredState] = useLocalStorage('timer-state', null);

  // Load from LocalStorage on mount
  useEffect(() => {
    if (storedState) {
      const { remaining, status, lastUpdated } = storedState;
      if (status === 'running') {
        const passed = Date.now() - lastUpdated;
        const newTime = Math.max(0, remaining - passed);
        setTimeLeft(newTime);
        setIsActive(true);
      } else {
        setTimeLeft(remaining);
      }
    }
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    if (timeLeft > 0 || isActive) {
      setStoredState({
        remaining: timeLeft,
        status: isActive ? 'running' : 'paused',
        lastUpdated: Date.now(),
      });
    }
  }, [timeLeft, isActive, setStoredState]);

  // Timer logic
  // Timer logic
  useEffect(() => {
    if (isActive && !isPaused && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 10) {
            setIsActive(false);
            setIsPaused(false);
            return 0;
          }
          return prev - 10; // Decrement by 10ms for precision
        });
      }, 10);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive, isPaused, timeLeft]);

  const startTimer = () => {
    if (timeLeft === 0) setTimeLeft(inputMinutes * 60 * 1000);
    setIsActive(true);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsPaused(true);
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(0);
    setStoredState(null);
  };

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${minutes}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="text-center space-y-4 max-w-sm mx-auto">
      <div className="text-4xl font-mono text-gray-800">{formatTime(timeLeft)}</div>
      <div className="flex gap-2 justify-center">
        <input
          type="number"
          min="1"
          value={inputMinutes}
          onChange={(e) => setInputMinutes(parseInt(e.target.value) || 1)}
          className="w-16 p-2 border border-gray-300 rounded-md text-center"
          disabled={isActive}
        />
        <span className="self-center text-gray-600">minutes</span>
      </div>
      <div className="flex gap-2 justify-center">
        {!isActive && !isPaused && (
          <button onClick={startTimer} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center gap-2">
            <Play size={16} /> Start
          </button>
        )}
        {isActive && (
          <button onClick={pauseTimer} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 flex items-center gap-2">
            <Pause size={16} /> Pause
          </button>
        )}
        <button onClick={resetTimer} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center gap-2">
          <RotateCcw size={16} /> Reset
        </button>
      </div>
    </div>
  );
}

export default CountdownTimer;