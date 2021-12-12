import { createStore } from "redux";

const initialState = {
  personList: [],
  courseList: [],
};

//reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  const personListCopy = [...state.personList];
  const courseListCopy = [...state.courseList];

  switch (type) {
    case "PERSON_ADD":
      const id = payload.id ? payload.id : state.personList.length + 1;
      personListCopy.push({ ...payload, id });

      return {
        ...state,
        personList: personListCopy,
      };

    case "PERSON_DELETE":
      personListCopy.splice(payload, 1);

      alert("Deleted..!");

      return {
        ...state,
        personList: personListCopy,
      };

    case "PERSON_UPDATE":
      console.log(payload);
      let objectToBeUpdatedIndex = personListCopy.findIndex(
        (person) => person.id === payload.id
      );
      personListCopy[objectToBeUpdatedIndex] = {
        ...personListCopy[objectToBeUpdatedIndex],
        ...payload,
      };
      alert("Updated...!");
      return {
        ...state,
        personList: personListCopy,
      };

    case "COURSE_ADD":
      courseListCopy.push(payload);

      return {
        ...state,
        courseList: courseListCopy,
      };

    case "COURSE_DELETE":
      courseListCopy.splice(payload, 1);

      alert("Deleted..!");

      return {
        ...state,
        courseList: courseListCopy,
      };

    default:
      return state;
  }
};

//store
const store = createStore(reducer);

export default store;
