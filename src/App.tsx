import React from 'react';
import logo from './logo.svg';
import './App.css';
import JSONSchemaForm from '@rjsf/core';

const App = ({}) => {
  const Formulaire = JSONSchemaForm;

  const schema: any = {
    "title": "Dots Test Form",
    "type": "object",
    "required": [
      "mail",
      "service"
    ],
    "properties": {
      "name": {
        "type": "string"
      },
      "adresse": {
        "type": "string"
      },
      "mail": {
        "type": "string"
      },
      "service": {
        "type": "string",
        "enum": [
          "dev",
          "marketing",
          "commerce",
          "produit",
          "finance",
          "autre"
        ]
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Formulaire schema={schema} />
      </header>
    </div>
  );
}

export default App;
