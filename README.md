# Simple App React Native project
This project had been created for praticing using React Native to create simple app by using core component and necessary. dependencies.
#### Demo of UI
![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzk0ZDI1NWJhMDk0NjVjNWE5ZDMzMmM5OTRiYTE2ZDc4YzVlMzVjOCZjdD1n/h66rAWYNVWkyufF1Zl/giphy.gif)
![img|200x400](readme-assets/cover-image-readme.png)
#### Commands
Installing Tailwind Native
For the configuration [Link](https://www.nativewind.dev/quick-starts/react-native-cli)
```
npm install nativewind
npm install -D tailwindcss
npx tailwindcss init
```
Example content configuration of `tailwind.config.js
```
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
```
Example configuration of `babel.config.js
```
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel"],
  };
```
Tailwind React Native Classnames
```
npm install twrnc
```
Install React Native Navigation [Link](https://reactnavigation.org/docs/getting-started)
```
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context

```
[Optional] Install React Native Navigation (From the official site)
```
npm install @react-navigation/native @react-navigation/native-stack

```
Creat and Start project
```
npx create-expo-app <PROJECT>
npx expo start
```
Build
```
npx expo run:ios
npx expo run:android
```
Install Expo status bar [Link](https://docs.expo.dev/versions/latest/sdk/status-bar/)
```
npx expo install expo-status-bar
```
Install React Native Animation [Link](https://www.npmjs.com/package/react-native-animatable/v/1.3.3)
```
npm install react-native-animatable
```
Install React Native Expo Icon [Usage link](https://icons.expo.fyi/)
```
npm install @expo/vector-icons
```
Install React Native Google Places Autocomplete [Link](https://www.npmjs.com/package/react-native-google-places-autocomplete)
```
npm install react-native-google-places-autocomplete
```
React Native Activity Indicator (loading handler) [Doc](https://reactnative.dev/docs/activityindicator)

Install React Native .env [Link](https://www.npmjs.com/package/react-native-dotenv)
```
npm install react-native-dotenv
// configuration of babel.config.js
{
  "plugins": [
    ["module:react-native-dotenv"]
  ]
}
```
Rapid API Travel Advisor [Link](https://rapidapi.com/apidojo/api/travel-advisor)
Endpoint: `restaurants/list-in-boundary`

Fixed ARM chip for Mac when run ExpoGo on simulator
```
softwareupdate --install-rosetta
```
### References
- React Native [sorce](https://reactnative.dev/docs/getting-started)
- React Native Core Components [sorce](https://reactnative.dev/docs/components-and-apis)
- React Native Navigation org [sorce](https://reactnavigation.org/)
- React Native Navigation official [sorce](https://reactnative.dev/docs/navigation)
- React Native Animatable [sorce](https://www.npmjs.com/package/react-native-animatable/v/1.3.3)
- React Native Google Places Autocomplete [sorce](https://www.npmjs.com/package/react-native-google-places-autocomplete)
- React Native Dot Env [sorce](https://www.npmjs.com/package/react-native-dotenv)
- Google Place API [sorce](https://developers.google.com/maps/documentation/places/web-service/overview)
- Native Wind [sorce](https://www.nativewind.dev)
- Native Wind Installation [sorce](https://www.npmjs.com/package/nativewind)
- Expo [sorce](https://docs.expo.dev)
- Expo Icon [sorce](https://docs.expo.dev/guides/icons/)
- Tailwind React Native Classnames [sorce](https://www.npmjs.com/package/twrnc)