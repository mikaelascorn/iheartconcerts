import React from 'react';

const JournalItem = (props) => {
  return (
    <li className="searchBandItems" >
      <p className="searchBandName searchBandItem firstItem question"><em>Artist Name:</em></p>
      <p className="searchBandName searchBandItem">{props.artist}</p>
      <p className="searchBandDate searchBandItem question"><em>Date:</em></p>
      <p className="searchBandDate searchBandItem">{props.date}</p>
      <p className="searchBandLocation searchBandItem question"><em>Location:</em></p>
      <p className="searchBandLocation searchBandItem">{props.location}</p>
      <p className="searchBandMemories searchBandItem question"><em>Memories from the Concert</em></p>
      <p className="searchBandMemoriesText searchBandItem">{props.memory}</p>
      <button onClick={() => props.removeJournal(props.firebaseKey)}>Remove</button>
    </li>
  )
}

export default JournalItem;