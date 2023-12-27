import React from 'react';
import './App.css';
import {Container} from 'shared/Container';
import { BudgetCalculator } from 'widgets/BudgetCalculator';

function App() {
  return (
    <>
    <Container>
      <BudgetCalculator test='12'/>
    </Container>

    </>
  );
}

export default App;
