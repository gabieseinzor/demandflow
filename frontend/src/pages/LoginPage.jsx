import logo from "../assets/logo.png";
import image from "../assets/images/img-connexion.jpg";
import Login from "./Login";

function LoginPage() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <section className=" flex flex-col w-1/2 bg-gris-clair px-24 py-17 gap-4">
        <img
          src={logo}
          className="w-40 rounded object-cover"
          alt="Image du logo de demandflow"
        />
        <p className="text-xl font-medium font-titre">
          Gérez vos demandes internes rapidement
        </p>
        <p className="text-sm">
          Centralisez vos demandes d’approvisionnement, suivez leur traitement
          et restez informé à chaque étape.
        </p>
        <img src={image} className="rounded w-full" alt="" />
      </section>

      <section className="flex flex-col w-1/2 bg-white px-24 py-17 gap-4">
        <Login />
      </section>
    </div>
  );
}

export default LoginPage;
