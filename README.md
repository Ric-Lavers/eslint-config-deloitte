![Deloitte Digital](https://raw.githubusercontent.com/DeloitteDigitalAPAC/eslint-config-deloitte/master/dd-logo.png)

# Deloitte Digital's ESLint Config [![Build Status](https://travis-ci.org/DeloitteDigitalAPAC/eslint-config-deloitte.svg?branch=master)](https://travis-ci.org/DeloitteDigitalAPAC/eslint-config-deloitte)


These packages provides Deloitte Digital's code standards as an ESLint extensible config.

- [Installation for ECMAScript 6+ projects](#installation-for-ecmascript-6-projects)
- [Installation for ECMAScript 6+ and React projects](#installation-for-ecmascript-6-and-react-projects)
- [Installation for Legacy ES5 projects](#installation-for-legacy-es5-projects)

> Please note: If you are using Types such as Flow or experimental features not supported in ESLint itself yet such as decorators. Please additionally [configure the babel-parser](#babel-parser-installation).

## Installation for ECMAScript 6+ projects

```bash
npm install --save-dev @deloitte-digital-au/eslint-config
```

### Usage

Add `"extends": ["@deloitte-digital-au/eslint-config"]` to your `.eslintrc.js` file.

**Example:**

```js
module.exports = {
	extends: [
		'@deloitte-digital-au/eslint-config',
	],
};
```

## Installation for ECMAScript 6+ and React projects

```bash
npm install --save-dev @deloitte-digital-au/eslint-config-react
```

### Usage

Add `"extends": ["@deloitte-digital-au/eslint-config-react"]` to your `.eslintrc.js` file.

**Example:**

```js
module.exports = {
	extends: [
		'@deloitte-digital-au/eslint-config-react',
	],
};
```


## Installation for legacy ES5 projects

```bash
npm install --save-dev @deloitte-digital-au/eslint-config
```

### Usage

Add `"extends": ["@deloitte-digital-au/eslint-config/legacy"]` to your `.eslintrc.js` file.

**Example:**

```js
module.exports = {
	extends: [
		'@deloitte-digital-au/eslint-config/legacy',
	],
};
```

## Babel Parser Installation

If you are using Types such as [Flow](https://github.com/facebook/flow) or experimental features not supported in ESLint itself yet such as decorators.

Add `"parser": "babel-eslint"` to your `.eslintrc.js` file. Then `npm install babel-eslint --save-dev`

Read more about configuring this package [here](https://github.com/babel/babel-eslint).

## Who is Deloitte Digital?

**Part Business. Part Creative. Part Technology. One hundred per cent digital.**

Pioneered in Australia, Deloitte Digital is committed to helping clients unlock the business value of emerging technologies. We provide clients with a full suite of digital services, covering digital strategy, user experience, content, creative, engineering and implementation across mobile, web and social media channels.

[http://www.deloittedigital.com/au](http://www.deloittedigital.com/au)

## LICENSE (BSD-3-Clause)
[View License](LICENSE)
