import "./WidgetLg.css"

const WidgetLg = () => {

  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  };

  return (
    <div className="widgetLg">
      <span className="widgetLgTitle">Latest Transactions</span>
      <table className="widgetLgTable">
        <tbody>

        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customers</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://i.pinimg.com/564x/ce/d4/e1/ced4e117b0f2f490c79e9e820d14cd99.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Robert Downey Jr.</span>
          </td>
          <td className="widgetLgDate">3 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>  
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://i.pinimg.com/564x/ce/d4/e1/ced4e117b0f2f490c79e9e820d14cd99.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Robert Downey Jr.</span>
          </td>
          <td className="widgetLgDate">3 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined"/>  
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://i.pinimg.com/564x/ce/d4/e1/ced4e117b0f2f490c79e9e820d14cd99.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Robert Downey Jr.</span>
          </td>
          <td className="widgetLgDate">3 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending"/>  
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://i.pinimg.com/564x/ce/d4/e1/ced4e117b0f2f490c79e9e820d14cd99.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Robert Downey Jr.</span>
          </td>
          <td className="widgetLgDate">3 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>  
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default WidgetLg
