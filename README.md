# Praticing React Native project
This project had been created for praticing using React Native to create simple app by core component.
#### Commands
Installing Tailwind Native
For the configuration [Link](https://www.nativewind.dev/quick-starts/react-native-cli)
```
npm install nativewind
npm install -D tailwindcss
npx tailwindcss init
```
Fixed ARM chip for Mac when run ExpoGo on simulator
```
softwareupdate --install-rosetta
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
### References
- React Native [sorce](https://reactnative.dev/docs/getting-started)
- React Native Core Components [sorce](https://reactnative.dev/docs/components-and-apis)
- Native Wind [sorce](https://www.nativewind.dev)
- Native Wind Installation [sorce](https://www.npmjs.com/package/nativewind)
- Expo [sorce](https://docs.expo.dev)