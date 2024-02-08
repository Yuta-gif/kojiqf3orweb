// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaAirFreshener,FaCheckSquare, } from 'react-icons/fa'; // FontAwesomeのアイコンをインポート
import { GrUserWorker } from "react-icons/gr";
import { IoQrCodeSharp } from "react-icons/io5";
import { MdOutlineRateReview } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='sidebar-header'>KOJIQ</div>
      <ul>
        <li>
          <NavLink to="/home" activeClassName="active" className="nav-link">
            <FaHome /> {/* ホームアイコン */}
            <span>ホーム</span> {/* テキスト */}
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active" className="nav-link">
            <FaUser /> {/* ユーザーアイコン */}
            <span>プロフィール</span> {/* テキスト */}
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName="active" className="nav-link">
            <FaCog /> {/* 設定アイコン */}
            <span>設定</span> {/* テキスト */}
          </NavLink>
        </li>
        <li>
           <NavLink to='/offerings' activeClassName='activate' className="nav-link">
             <FaCirclePlus />
             <span>求人作成</span>
           </NavLink>
        </li>
        <li>
           <NavLink to='offreings' activeClassName='activate' className="nav-link">
             <MdOutlineRateReview  />
             <span>レビュー</span>
           </NavLink>
        </li>
        <li>
           <NavLink to='offreings' activeClassName='activate' className="nav-link">
             <GrUserWorker />
             <span>ワーカー管理</span>
           </NavLink>
        </li>
        <li>
           <NavLink to='offreings' activeClassName='activate' className="nav-link">
             <IoQrCodeSharp />
             <span>QR勤怠</span>
           </NavLink>
        </li>
        <li>
           <NavLink to='offreings' activeClassName='activate' className="nav-link">
             <FaCheckSquare  />
             <span>修正依頼</span>
           </NavLink>
        </li>

        {/* 他のリンクを追加 */}
      </ul>
    </div>
  );
};

export default Sidebar;