import { Link } from 'react-router-dom'

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      Genuine OEM parts only   factory fit, factory finish.&nbsp;
      <Link to="/shop">Browse Products &rarr;</Link>
    </div>
  )
}
