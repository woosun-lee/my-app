import axios from 'axios';

/* const users = [
    { id: 'kim@test.com', password: '123', name: 'Kim' },
    { id: 'lee@test.com', password: '456', name: 'Lee' },
    { id: 'park@test.com', password: '789', name: 'Park' }
  ] */
  
  export async function signIn({ id, password }) {
    //const user = users.find(user => user.id === id && user.password === password);
    //if (user === undefined) throw new Error();
    //return user;
    try{
      let resdata;
      await axios.get("http://openapi.seoul.go.kr:8088/sample/xml/GeoInfoPublicToiletWGS/1/5/")
      .then((res)=> {
        if(res.status === 200){
          resdata = res.data;
          console.log(resdata);
        }
      });
      return resdata;
  }
  catch(e) {
    console.log(e);
  }
}