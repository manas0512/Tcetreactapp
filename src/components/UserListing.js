import React, { useState } from 'react'
import User from './User'

export default function UserListing() {
   const [users, setUsers] = useState([])
   
    function showData(){
        fetch("https://reqres.in/api/users?page=1")
        .then(res => res.json())
        .then(result => {

            var records = result.data;
            console.log(result.data);
            var rows = [];
            
            for(let i=0; i<records.length;i++ ){
                rows.push(<User data={{id: records[i]['id'] , name : records[i]['first_name']+ " "+ records[i]['last_name'], email : records[i]['email'], avatar : records[i]['avatar']}}  />)
            }
            setUsers(rows);
        }
          )
      }
  
    return (
    <>
        <button onClick={showData}>Click Me</button>
        {users}

        <User data={{id: "1", name : "George", email : "george.bluth@reqres.in", avatar : "https://reqres.in/img/faces/1-image.jpg"}}  />
    
    </>
  )
}