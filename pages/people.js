import React, { useState } from "react";
import people from '../data.json'

export default function Home() {


  const [search, setNewSearch] = useState("");

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  };


  const filtered = !search
    ? people
    : people.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );



  return (
    <div>
      <h1>Hello</h1>
      <h2>Phone book</h2>
      Filter persons:
      <input type="text" value={search} onChange={handleSearchChange} />

      <h2>Numbers</h2>

      {search == "" ? 'enter some keyword' : ''}


      {search !== "" ?
        <div>
          {filtered.map((person) => {
            return (
              <p key={person.id}>
                {person.name} - {person.number}
              </p>
            );
          })}
        </div>
        : ''}

      {search !== "" & filtered == 0 ? 'cant find post' : ''}

    </div>
  )
}
