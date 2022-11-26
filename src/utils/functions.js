import firebase from "./firebase";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import Toastify from "./customToastify";

export const AddUser = (info) => {
  console.log(info);
  const db = getDatabase();
  const userRef = ref(db, "user/");
  const newUserRef = push(userRef);
  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  })
};

export const GetUser = () => {
  const [contactList, setContactList] = useState();

  useEffect(() => {
    const db = getDatabase();
    const userRef = ref(db, "user/");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setContactList(userArray);
    });
  }, []);
  return { contactList };
};
export const DeleteUser = (id) => {
  const db = getDatabase();
  const userRef = ref(db, "user/");
  remove(ref(db, "user/" + id));

  Toastify("User information deleted")
};

export const EditUser = (info) => {
  const db = getDatabase();
  const updates = {};

  updates["user/" + info.id] = info;
  return update(ref(db), updates);
};
