# bootstrap-4-required

Bundle together required JS/CSS files for Bootstrap 4. So no need to copy-paste links into your HTML file.

## Install

```
npm install --save bootstrap-4-required
```

## Usage

```
import React, { Component } from 'react';
import 'bootstrap-4-required';

class App extends Component {
  render() {
    return (
      <div className="alert alert-primary" role="alert">
        A simple primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </div>
    );
  }
}

export default App;
```
