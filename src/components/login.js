import React, { 
  useState,
  useEffect,
} from "react"

const Login = ({ title, handleLogin, onSuccess }) => {

  const [ 
    accessCode, 
    setAccessCode 
  ] = useState(null)

  const [
    loginError,
    setLoginError
  ] = useState(false)

  useEffect( () => {
    console.log('useEffect loginError:',loginError)
    loginError && onSuccess()
  },[loginError])
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{title}</h1>
      <form
        method="post"
        onSubmit={ event => {
          event.preventDefault()
          let response = handleLogin( { 
            accessCode: accessCode 
          })
          setLoginError( response?false:true )
        }}
      >
        <input
          style={styles.inputField}
          type="password"
          name="password"
          placeholder="Enter Access Code"
          onChange={event => setAccessCode(event.target.value)}
        />
        <input 
          style={styles.submitButton}
          type="submit" 
          value="Enter" 
        />
      </form>
      {loginError && <div>Incorrect access code, please try again!</div>}
    </div>
  )
}
export default Login

const styles = {
  container: {
    backgroundColor: '#6e6e6e',
    color: '#a055fa',
    height: '100vh',
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 50,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  inputField: {
    height: 34,
    border: 'none',
    paddingLeft: '13px',
  },
  submitButton: {
    backgroundColor: '#a055fa',
    border: 'none',
    fontSize: 15,
    color: '#ffffff',
    height: 34,
    textTransform: 'uppercase',
    width: 100,
    padding: 0,
    paddingTop: 2,
    cursor: 'pointer',
  }
}