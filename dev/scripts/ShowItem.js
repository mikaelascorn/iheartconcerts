import React from 'react';

const ShowItem = (props) => {
  return(
    <li className="showItems" >
      <p className="showDate showItem firstItem question"><em>Date of Concert:</em></p>
      <p className="showDate showItem">{props.date}</p>
      <p className="showVenue showItem question"><em>Concert Venue:</em></p>
      <p className="showVenue showItem">{props.venue}</p>
      <p className="showCity showItem question"><em>City of Concert:</em></p>
      <p className="showCity showItem">{props.city}</p>
      <a className="showTickets showItem" href={props.url}>Buy Tickets!</a>
    </li>
  )
}

export default ShowItem;