import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: null,
        password: null,
    });

    const handleLogin = (e) => {
        e.preventDefault();
        setErrors({ email: null, password: null });
        try {
            if (!formValues.email.trim() || !formValues.password.trim()) {
                if (!formValues.email.trim()) {
                    setErrors((prev) => ({
                        ...prev,
                        email: "Email is required",
                    }));
                }
                if (!formValues.password.trim()) {
                    setErrors((prev) => ({
                        ...prev,
                        password: "Password is required",
                    }));
                }
                return;
            }
            console.log(formValues);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <section>
            <div>Login</div>
            <div>
                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={(e) =>
                                setFormValues((prev) => ({
                                    ...prev,
                                    email: e.target.value.trim().toLowerCase(),
                                }))
                            }
                        />
                        {errors.email && <p>{errors?.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={(e) =>
                                setFormValues((prev) => ({
                                    ...prev,
                                    password: e.target.value.trimStart(),
                                }))
                            }
                        />
                        {errors.password && <p>{errors?.password}</p>}
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </section>
    );
}
