import { useId, useState } from "react";
import InputField from "../components/InputField";

// fonction de création du formulaire de connexion
function Login() {
  const title = "Connexion";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInputId = useId();
  const passwordInputId = useId();

  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setError(
        "Merci de renseigner une adresse mail et un mot de passe pour vous connecter",
      );
      return;
    }

    setError("");
    console.log(`Connexion de : ${email}`);
  }

  return (
    // formulaire de connexion à l'application
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-16 p-6 border border-gris rounded-lg "
    >
      <h1 className="text-2xl font-bold mb-4 text-primary-900">{title}</h1>
      <label htmlFor={emailInputId} className="mb-2 block text-sm">
        E-mail
      </label>
      <InputField
        id={emailInputId}
        type="email"
        placeholder="Saisissez votre adresse e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor={passwordInputId} className="mb-2 block text-sm">
        Mot de passe
      </label>
      <InputField
        id={passwordInputId}
        type="password"
        placeholder="Saisissez votre mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && (
        <p role="alert" className="text-sm text-erreur mb-4">
          {error}
        </p>
      )}
      <button
        type="submit"
        className="w-full bg-primary-700 text-white rounded p-2"
      >
        Se connecter
      </button>
    </form>
  );
}

export default Login;
