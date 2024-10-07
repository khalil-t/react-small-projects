import { clients } from "../constant";
import './Clients.css'

const Clients = () => (
  <section className="Clients" >
    <div className="Clientsd">
      {clients.map((client) => (
        <div key={client.id} className="Clientsid">
          <img src={client.logo} alt="client_logo" className="Clientsimg" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;