import "./FeaturedInfo.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItems">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,223</span>
          <span className="featuredMoneyRate">-7.69 <ArrowDownwardIcon className="featuredIcon negative"/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItems">
        <span className="featuredTitle">Sale</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,493</span>
          <span className="featuredMoneyRate">-11.69 <ArrowDownwardIcon className="featuredIcon negative"/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItems">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,398</span>
          <span className="featuredMoneyRate">+2.69 <ArrowUpwardIcon className="featuredIcon"/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo
