import "./Home.css"
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo"
import Chart from "../../components/Chart/Chart"
import WidgetSm from "../../components/WidgetSm/WidgetSm"
import WidgetLg from "../../components/WidgetLg/WidgetLg"
import { useState, useEffect, useMemo } from "react";
import rootUrl from "../../api"

const Home = () => {

  const MONTHS = useMemo(()=>[ 
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],[]); 

  const[userStats, setUserStats] = useState([]);

  useEffect(()=>{
    const getStats = async()=>{
      try{
        const res = await fetch(`${rootUrl}/users/stats`,{
          method:"GET",
          credentials:"include"
        });

        if(!res.ok){
          throw new Error("Request failed with status " + res.status);
        }
        
        const data = await res.json();
        const statsList = data.sort(function(a,b){
          return a._id - b._id;
        });
        setUserStats([]);
        statsList.map(item=>setUserStats(prev=>[...prev,{name: MONTHS[item._id - 1], "New Users": item.total}]));
      }
      catch(err){
        console.log(err)
      }
    }
    getStats();
  },[MONTHS])

  
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userStats} grid title="User Analytics" dataKey="New Users"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home
