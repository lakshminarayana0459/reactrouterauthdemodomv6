import { useAuth } from "../context/AuthProvider";

export const LoginPage = () => {
    const { login } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        login({
          email: event.target.value
        });
      };

    return(
        <div>
        <h1>Login page 2</h1>
        <input
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <button onClick={handleSubmit}>Login</button>
        </div>
    )
   
}