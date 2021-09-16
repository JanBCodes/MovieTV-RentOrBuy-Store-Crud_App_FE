import React from 'react'

const Sign_In = () => {
    return (
        <div className="signInContainer">
            <h1> Sign in to View </h1>

            <form>

                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit">Login</button>
                    <label>
                    <input type="checkbox" checked="checked" name="remember" Remember me />
                    </label>
                </div>

            </form>

        </div>
    )
}

export default Sign_In
