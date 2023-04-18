import React, { createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  state = {
    isLightTheme: false,
    light: {
      background: "bg-white",
      text: "text-[#06150a]",
      bulb: "text-gray-700",
    },
    dark: {
      background: "bg-gray-900",
      text: "text-white",
      bulb: "text-yellow-400"


    },
  };

  toggleTheme = () => {
    this.setState({isLightTheme: !this.state.isLightTheme})
  }
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
