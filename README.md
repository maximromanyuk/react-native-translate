# React Native Translate

## Usage

1. `yarn add react-native-translate`
2. Create `json` file with your translation like this: 
```json
{
  "email": "Електронна пошта"
}
```
3. Set localization file in your `index.js`:
```js
import ukTranslation from './src/localization/uk.json';
import { setLocalization } from 'react-native-translate';

setLocalization(ukTranslation);
```
4. Use translation: 
```jsx
import { translate, Translate } from 'react-native-translate';

translate('email') // returns 'Електронна пошта'
// Or
<Translate value="email" /> // renders <Text>Електронна пошта</Text>
```
3. If you want to run tests: `npm test` or `npm run testonly` or `npm run test-watch`.
4. If you want to run linting: `npm test` or `npm run lint`. Fix bugs: `npm run lint-fix`.
5. If you want to run transpilation to ES5 in `dist` folder: `npm run prepublish` (standard npm hook).


## License

MIT
