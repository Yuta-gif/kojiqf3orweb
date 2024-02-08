const TimeTable = () => {
    return (
      <div className="time-table" style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="hour" style={{ height: '4em', border: '1px solid #ddd' }}>
            {i}:00
          </div>
        ))}
      </div>
    );
  };

  export default TimeTable;

  