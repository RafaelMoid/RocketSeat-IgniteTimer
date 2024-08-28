import { Play } from "phosphor-react";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutsAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            placeholder="Defina qual será a sua tarefa"
            id="task"
            list="task-suggestions"
            type="text"
          />

          <datalist id="task-suggestions">
            <option value="x"></option>
          </datalist>

          <label htmlFor="minutsAmount">durante</label>
          <MinutsAmountInput
            id="minutsAmount"
            type="number"
            placeholder="00"
            step={5}
            max={999}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24} /> começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
