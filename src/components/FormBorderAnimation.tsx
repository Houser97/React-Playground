import '../styles/FormBorderAnimation.css'

const FormBorderAnimation = () => {
  return (
    <div className="main_container form__animation">
        <div className='box'>
            <form>
                <h2>Sign in</h2>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <input type="submit" value='Login'/>
                <div className="group">
                    <a href="">Forget Password</a>
                    <a href="">Sign up</a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FormBorderAnimation