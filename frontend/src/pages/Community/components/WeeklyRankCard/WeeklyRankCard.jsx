import React from "react";
import "./WeeklyRankCard.css";

export default function WeeklyRankCard({
  rank = 1,
  title = "The Evolution of My Code",
  user = "user123",
  date = "May 8, 2025",
  likes = "7.8k",
  comments = "142",
  shares = "2.1k",
  thumbSrc,      // 썸네일 이미지
  avatarSrc,     // 아바타 이미지
  icoHeart,
  icoComment,
  icoShare,
  onView,
}) {
  return (
    <div className="frame-parent">
      <div className="the-evolution-of-my-code-parent">
        <div className="the-evolution-of">{title}</div>

        {/* avatar */}
        <img className="frame-child" alt="avatar" src={avatarSrc} />

        <div className="user123-may">
          @{user}  •  {date}
        </div>

        <div className="frame-group">
          <div className="vector-parent">
            <img className="vector-icon" alt="likes" src={icoHeart} />
            <div className="k">{likes}</div>
          </div>

          <div className="vector-group">
            <img className="vector-icon2" alt="comments" src={icoComment} />
            <div className="div">{comments}</div>
          </div>

          <div className="vector-group">
            <img className="vector-icon3" alt="shares" src={icoShare} />
            <div className="div">{shares}</div>
          </div>
        </div>
      </div>

      {/* rank + thumb */}
      <div className="parent">
        <div className="div2">{rank}</div>
        <img className="frame-item" alt="thumb" src={thumbSrc} />
      </div>

      {/* view button */}
      <button className="view-wrapper" type="button" onClick={onView}>
        <div className="view">View</div>
      </button>
    </div>
  );
}
