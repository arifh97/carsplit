import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function CustomCalendar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const weeksInMonth = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInWeek = 7;
    const weeksInMonth = Math.ceil(
      (daysInMonth + firstDay) / daysInWeek
    );
    return weeksInMonth;
  };

  const renderDays = () => {
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daysInWeek = 7;
    const days = [];
    for (let i = 0; i < weekDays.length; i++) {
      days.push(
        <div key={i} className="day">
          {weekDays[i]}
        </div>
      );
    }
    return <div className="calendar-week">{days}</div>;
  };

  const renderCalendar = () => {
    const weeks = [];
    const weeksCount = weeksInMonth(month, year);
    const daysInWeek = 7;    
    const today = new Date().getDate();
    let day = 1;
    for (let i = 0; i < weeksCount; i++) {
      const days = [];
      for (let j = 0; j < daysInWeek; j++) {
        if (day > daysInMonth()) {
          break;
        }
        days.push(
          <div key={day} className= {day === today ? 'day today' : 'day'}>
            {day}
          </div>
        );
        day++;
      }
      weeks.push(<div key={i} className="calendar-week">{days}</div>);
    }
    return <div className="calendar-wrap">{weeks}</div>;
  };

  const daysInMonth = () => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handlePrev = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNext = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <div className="calendar-container">
      
      <div className="calendar-header">
        <button onClick={handlePrev}>&lt;</button>
        <div className="month">{`${new Date(
          year,
          month
        ).toLocaleString('default', { month: 'long' })} ${year}`}</div>
        <button onClick={handleNext}>&gt;</button>
      </div>
      {renderDays()}
      {renderCalendar()}
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
   
  );
}

export default CustomCalendar;
