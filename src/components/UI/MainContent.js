import React from 'react';
import Calendar from 'react-calendar'; // カレンダーコンポーネントをインポート
import TimeTable from './TimeTable';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="boxes">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="box">Box {i + 1}</div>
        ))}
      </div>
      <div className="calendar-and-box"> {/* ここを追加 */}
        <div className="calendar">
          <Calendar /> {/* カレンダーコンポーネントを表示 */}
        </div>
        <div className="box-right"> {/* ここを追加 */}
          <TimeTable />
        </div>
      </div>
    </div>
  );
};
export default MainContent;