const SearchResults = (props) => {
  let data=props.update;
      return (
          <table >
            {/* add columnsheadings */
            <thead>
            <tr>
              <th>DEPARTURE</th>
              <th>DURATION</th>
              <th>ARRIVAL</th>
              <th>PRICE</th>
            </tr>
            </thead>
            }
            
            <tbody data-testid="flight-results">{
          //  map through the results and display as rows
              data.map((el)=>(
                <tr>
                  <td>{el.departure}</td>
                  <td>{el.duration}</td>
                  <td>{el.arrival}</td>
                  <td>{el.price}</td>
                </tr>
              ))
            }</tbody>
          </table>
      );
    
  };
  export default SearchResults;
  