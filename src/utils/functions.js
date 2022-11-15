import firebase from './firebase'
import { getDatabase, onValue, push, ref, remove, set, update } from 'firebase/database'
import { useEffect, useState } from 'react';

export const AddUser =(info)=>{
    console.log(info)
    const db = getDatabase();
    const userRef = ref(db,'user/');
    const newUserRef = push(userRef)
    set((newUserRef),{
        username:info.username,
        phoneNumber:info.phoneNumber, 
        gender:info.gender,

    })
    console.log("dkshkdsdj")
}

export const GetUser =()=>{
    const [contactList, setContactList] = useState();
    useEffect(() => {
      const db = getDatabase();
      const userRef = ref(db,'user/');
      onValue(userRef,(snapshot)=>{
        const info = snapshot.val();
        const baglantiArray=[];

        for(let id in info){
            baglantiArray.push({id,...info[id]})
        }
        setContactList(baglantiArray);
        
      })
    }, [])
    return {contactList}
}
export const DeleteUser=(id)=>{
  const db = getDatabase();
  const userRef=ref(db,"user/");
  remove(ref(db,"user/"+id))

  // Toastify("Kullanıcı bilgisi silindi")
}

export const EditUser=(info)=>{
  const db = getDatabase();
  const updates = {};
  

  updates["user/"+info.id]=info;
  return update(ref(db),updates);

}