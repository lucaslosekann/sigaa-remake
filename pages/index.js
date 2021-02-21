import Head from 'next/head'
import loginStyle from '../styles/login.module.css'
import React, {useEffect} from "react";





const login = (user,pass)=>{
  fetch(`/api/sigaa?user=${user}&pass=${pass}`).then(data=>{
    return data.json()
  }).then(data=>{
    console.log(data);
  })
}










export default function Home() {

  useEffect(() => {
    document.querySelector('#loginForm').addEventListener('submit',evt=>{
      evt.preventDefault();
      const user = evt.target.elements['email'].value;
      const pass = evt.target.elements['pass'].value;
      if(user && pass){
        login(user,pass);
      }
    })
  }, [])

  return (
    <div>
      <Head>
        <title>Sigaa Remake</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className={loginStyle.main}>
        <div className={loginStyle.login}>
          <h1 className={loginStyle.title}>Login</h1>
          <form id="loginForm" name="formL">
              <p>Usuário</p>
              <input type="text" placeholder="Insira seu email" required name="email"/>
              <p>Senha</p>
              <input type="password" placeholder="Insira sua senha" required name="pass"/>
              <input type="submit" value="Login"/><br/>
          </form>
        </div>
      </main>
    </div>
  )
}
