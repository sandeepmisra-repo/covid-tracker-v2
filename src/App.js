import React from "react";
import styles from "./App.module.css";
import { fetchData } from "./api/";

import image from "./images/image.png";

import { Cards, Chart, CountryPicker } from "./components";

class App extends React.Component {
  state = {
    data: {},
    country: ""
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async country => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <h5 className={styles.copyright}>
          <p>© 2020 All Rights Reserved | Terms and Conditions</p>
          <p>Made by 💖 Sandeep Kumar Misra 💖</p>
        </h5>
      </div>
    );
  }
}

export default App;
