import { useState } from "react";

const State = () => {
  const [peopleQueue, setPeopleQueue] = useState([]);
  const [personName, setPersonName] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("personName", personName);
    const keyedPerson = {
      id: new Date().getTime(),
      personName: personName,
    };
    setPeopleQueue(function (item) {
      return [...item, keyedPerson];
    });
  }

  console.log("State app re renderedz1");
  console.log(peopleQueue);

  const removePerson = (idParam) => {
    const newPeopleList = peopleQueue.filter(function (item) {
      return item.id !== idParam;
    });
    setPeopleQueue(newPeopleList);
  };

  const displayPeopleList = peopleQueue.map(function (item) {
    return (
      <div key={item.id}>
        <p>{item.personName}</p>
        <button
          onClick={() => {
            removePerson(item.id);
          }}
        >
          Remove from Queue
        </button>
      </div>
    );
  });

  return (
    <>
      <p>Lets manage state using useState hook.</p>
      <form onSubmit={handleSubmit}>
        <input
          value={personName}
          type="text"
          onChange={(e) => setPersonName(e.target.value)}
        />
        <button type="submit">Add in queue</button>
      </form>
      <section>
        <h3>List of all the people in line:</h3>
        {displayPeopleList}
      </section>
    </>
  );
};

export default State;
