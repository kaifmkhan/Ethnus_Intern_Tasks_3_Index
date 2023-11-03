import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Tasks</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Task Number</th>
            <th>Repository Link</th>
            <th>Deployment Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>My-react-app</td>
            <td>
              <a href="https://github.com/kaifmkhan/Task3_my_react_app">Link 1</a>
            </td>
            <td>
              <a href="https://task3-my-react-app-kappa.vercel.app/">Link 1</a>
            </td>
          </tr>
          <tr>
            <td>React-calculator-app</td>
            <td>
              <a href="https://github.com/kaifmkhan/Task3_Calculator_app">Link 2</a>
            </td>
            <td>
              <a href="https://task3-calculator-app.vercel.app/">Link 2</a>
            </td>
          </tr>
          <tr>
            <td>Color-picker-react-app</td>
            <td>
              <a href="https://github.com/kaifmkhan/Task3_ColorPicker">Link 3</a>
            </td>
            <td>
              <a href="https://task3-color-picker-three.vercel.app/">Link 3</a>
            </td>
          </tr>
          <tr>
            <td>Usertable-react-app</td>
            <td>
              <a href="https://github.com/kaifmkhan/Task3_UserTable_app">Link 4</a>
            </td>
            <td>
              <a href="https://task3-user-table-app.vercel.app/">Link 4</a>
            </td>
          </tr>
          <tr>
            <td>Age-calculator-react-app</td>
            <td>
              <a href="https://github.com/kaifmkhan/Task3_Age_Calculator">Link 5</a>
            </td>
            <td>
              <a href="https://task3-age-calculator-two.vercel.app/">Link 5</a>
            </td>
          </tr>
          <tr>
            <td>Portfolio</td>
            <td>
              <a href="https://github.com/kaifmkhan/Task3_Portfolio_ReactApp">Link 6</a>
            </td>
            <td>
              <a href="https://task3-portfolio-react-app.vercel.app/">Link 6</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
