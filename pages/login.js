import Head from 'next/head'
import loginStyle from '../styles/login.module.css'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Sigaa Remake</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main class={loginStyle.main}>
        <div class={loginStyle.login}>
          <h1 class={loginStyle.title}>Login</h1>
          <form id="loginForm" name="formL">
              <p>Usuário</p>
              <input type="text" placeholder="Insira seu email" required="Pao" name="email"/>
              <p>Senha</p>
              <input type="password" placeholder="Insira sua senha" required="" name="pass"/>
              <input type="submit" value="Login"/><br/>
          </form>
        </div>
      </main>
    </div>
  )
}

const login = ()=>{

}

