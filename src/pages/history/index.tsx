import { HistoryContainer, HistoryList } from "./style";

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu historico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estudar</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Estudar</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Estudar</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Estudar</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Estudar</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluido</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
