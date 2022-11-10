import { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Form from './Components/Form/Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservas: [
        { Fecha: "2022-04-13", Lugar: "Hotel" },
        { Fecha: "2022-03-3", Lugar: "Spa" },
      ],
    };
  }

  handleCallback = (childData) => {
    this.setState({ reservas: [...this.state.reservas, childData] });
  };
  render() {
    return (
      <>
        <Navbar></Navbar>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Form parentCallback={this.handleCallback} />
              <div className="tamble__cont">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Lugar</th>
                    <th scope="col">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.reservas.map((reserva, index) => (
                    <tr key={index.toString()}>
                      <td>{(index + 1).toString()}</td>
                      <td>{reserva.Lugar}</td>
                      <td>{reserva.Fecha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
