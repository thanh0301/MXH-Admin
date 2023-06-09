import axios from "../utils/axiosCustomsize"
const postLogin = (account,password) =>{

    return axios.post(`api/login/v1/login`,{
      account:account,
      password:password 
    })
  }
  
const getUser= (id) =>{
  return axios.get(`/api/status/v1/statusshowid/${id}`)
}

const getstatus = () =>{
  return axios.get(`/api/status/v1/statusshow`)
}


const getUser1= (id) =>{
  return axios.get(`/api/perpage/v1/perpage/${id}`)
}

const Loginsinup = (account,password,first_name,last_name,dob,email) =>{
  
  const data = new FormData();
  data.append('account', account);
  data.append('password', password)
  data.append('first_name', first_name);
  data.append('last_name', last_name)
  data.append('dob', dob);
  data.append('email', email)

 return  axios.post('/api/login/v1/signup', data)
  
}

const logout = (email) =>{

  return axios.post('/api/login/v1/logout',{
    email:email
  })
}


const deleteStart = (status_id) =>{
  return  axios.delete('/api/status/v1/statusdelete', {data: {id:status_id}})
}

const updataStart = (id,content) =>{
  const data = new FormData();
  data.append('id', id)
  data.append('content', content)
  return  axios.put('/api/status/v1/statusupdate', data)
}

const creatcmt = (user_id,status_id,comment) =>{
  
  const data = new FormData();
  data.append('user_id', user_id);
  data.append('status_id', status_id)
  data.append('comment', comment);
 return  axios.post('/api/status/v1/StatusCmt', data)  
}
const cmt = (id) =>{
  
  return axios.get(`/api/status/v1/statusshowid/${id}`)
}


  export {postLogin,
    getUser,
    getstatus,
    getUser1,
    Loginsinup,
    logout,
    deleteStart,
    updataStart,
    creatcmt,
    cmt
  } 