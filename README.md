# Bind.js ~ npm @ bind-react

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
    this.bar = this.bar.bind(this);
    this.baz = this.baz.bind(this);
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

Now, for the sake of simplicity, Bind() will accept an array of strings containing the names of your method(s), then bind the collection to your desired context (typically your component).

```js
constructor() {
    // ...

    Bind(['loginHandler', 'signOutHandler']).to(this);
}

loginHandler() {/* ... */}
signOutHandler() {/* ... */}
```

Optionally, if your component only contains one method needing to be bound, Bind() will accept a single string parameter containing the method name instead of an array. This helps keep your JSX a little cleaner, rather than writing your bindings inline:

```js
<LoginButton loginHandler={this.loginHandler.bind(this)} />
```
Add to your constructor (or within anywhere containing your components scope):
```js
Bind('loginHandler').to(this);
```

and now you can assign your props a little cleaner:

```js
<LoginButton loginHandler={this.loginHandler} />
```

### examples overview:

| ***String*** | limited to one method binding.
```js
class LoginForm extends Component {
  constructor() {
      this.state = {
      	// ...
      };

      Bind('loginHandler').to(this);
  }

  loginHandler()  { /* ... */ }
}
```

| ***Array*** | An array of method names in string format.
```js
class LoginForm extends Component {
    constructor() {
        this.state = {
      	    // ...
        };

        Bind(['loginHandler, signOutHandler']).to(this);
    }

    loginHandler()  { /* ... */ }
    signOutHandler() { /* ... */ }
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
            'loginHandler',
			'signOutHandler',
            'forgotPasswordHandler'
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
