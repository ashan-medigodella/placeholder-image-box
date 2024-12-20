# placeholder-image-box

A simple React Native component for displaying a box with customizable dimensions and background color. This can be useful as a placeholder or a simple styled box in your React Native applications.

## Installation

Install the package via npm:

```bash
npm install placeholder-image-box
```

## Usage

Here's how you can use the BoxImage component in your React Native project:

```
import React from "react";
import { View, StyleSheet } from "react-native";
import BoxImage from "placeholder-image-box";

const App = () => {
  return (
    <View style={styles.container}>
      {/* Box with specified background color */}
      <BoxImage width={200} height={150} backgroundColor="lightblue" />
      {/* Box with default gray background color */}
      <BoxImage width={200} height={150} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
```
![image](https://github.com/ashan-medigodella/placeholder-image-box/assets/57296166/cbcd93b4-7d42-4338-9b64-3578d40f855c)



## Props

The BoxImage component accepts the following props:

- `width (number)`: The width of the box. Default is 100.
- `height (number)`: The height of the box. Default is 100.
- `backgroundColor (string)`: The background color of the box. Default is "gray".

### Example


```
import React from "react";
import { View, StyleSheet } from "react-native";
import BoxImage from "placeholder-image-box";

const Example = () => {
  return (
    <View style={styles.container}>
      <BoxImage width={100} height={100} backgroundColor="red" />
      <BoxImage width={150} height={150} backgroundColor="green" />
      <BoxImage width={200} height={200} backgroundColor="blue" />
      <BoxImage width={250} height={250} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Example;
```
![image](https://github.com/ashan-medigodella/placeholder-image-box/assets/57296166/6132d740-22b4-438f-88be-cc99292a1b99)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Issues
If you encounter any issues, please report them [here](https://github.com/ashan-medigodella/placeholder-image-box/issues).
