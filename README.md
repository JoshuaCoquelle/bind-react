# Bind.js ~ bind-react

React.js helper module for keeping your method bindings clean.

## Installation

```
npm install bind-react
```

## Why use Bind.js?
Still doing this?

```js
constructor() {
	// ...
    this.foo = this.foo.bind(this);
    this.bar = this.bar.bind(this;
    this.baz = this.bind(this);
}
```

Let's try this instead.

```js
constructor() {
	// ...
    Bind(['foo', 'bar', 'baz']).to(this);
}
```

## Using Bind.js

Before we do anything, lets import Bind into our project.

```js
import Bind from 'bind-react';
```

Now, for the sake of simplicity, Bind() will accept an array of method string names, and bind that method collection to your desired context (typically your component).

If you're only looking to bind one method to your component and don't want to dirty your JSX up with ``` foo={this.foo.bind(this)} ``` , Bind() can accept a single string parameter in its place.


##### examples:

| ***String*** | limited to one method binding.
```js
class LoginForm extends Component {
  constructor() {
      this.state = {
      	// ...
      };

      Bind('onLoginSuccess').to(this);
  }

  onLoginSucces()  { /* ... */ }
}

```

| ***Array*** | An array of method names in string format.
```js
class LoginForm extends Component {
    constructor() {
        this.state = {
      	    // ...
        };

        Bind(['onLoginSuccess, onLoginFailure']).to(this);
    }

    onLoginSuccess()  { /* ... */ }
    onLoginFailure() { /* ... */ }
}

```

| ***Array*** | **recommended** (~ optional ~)
* create a new method called methods()
* return an array of method names via string, like the previous array example above
* pass the methods() function to Bind() --- don't forget to drop the parenthesis if using a getter method to keep it looking fresh
* profit

```js
class LoginForm extends Component {
    constructor() {
        this.state = {
      	    // ...
        };

        Bind(this.methods).to(this);
    }

    /*
     * Return an array of method names.
     *
     * Getter used to remove the need to invoke method call (sexy).
     */
    get methods() {
        return [
            'onLoginSuccess',
			'onLoginFailure',
            'hasForgottenPassword'
        ];
    }
}
```


## Versioning

This repo uses [SemVer](http://semver.org/) .

## Authors

* **Joshua Coquelle** - [JoshuaCoquelle](https://github.com/JoshuaCoquelle)

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details
