import React, { useState } from 'react'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email || !password) {
            setError('Please enter both email and password.')
            return
        }
        setError(null)
        // TODO: replace with real auth call
        console.log('Login submit', { email, password, remember })
        alert('Submitted (mock)')
    }

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 login-page-bg">
            <div className="card shadow login-card">
                <div className="card-body p-4">
                    <h2 className="card-title d-flex justify-content-center mb-2">Sign in</h2>
                    <p className="text-muted mb-3">Welcome back — please sign in to your account</p>

                   
                

                    <form onSubmit={handleSubmit} noValidate>
                        {error && <div className="alert alert-danger">{error}</div>}

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                id="email"
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="form-text">We'll never share your email with anyone else.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                id="password"
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="mb-3 form-check">
                            <input
                                id="remember"
                                type="checkbox"
                                className="form-check-input"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="remember">Remember me</label>
                        </div>

                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
