import React, { useState } from "react";

import { ResultBox } from "./containers";
import { Card, Input, Title, Wrapper } from "./components";

function App() {
  const [query, setQuery] = useState("");

  const onChangeQuery = ({ target: { value: newQuery } }) => setQuery(newQuery);

  return (
    <Wrapper>
      
      <Title>Minha terrível versão do github app</Title>

      <p>Procure pelo usuário github</p>

      <Card>
        <Input
          placeholder="Digite o nome do usuário desejado"   
          type="text"
          onChange={onChangeQuery}
          value={query}                 
        />
        {query && <ResultBox query={query} />}
      </Card>
    </Wrapper>
  );
}

export default App;
