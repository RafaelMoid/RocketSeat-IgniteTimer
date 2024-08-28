import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit, watch } = useForm();

  function handleCreateNewCycle(data: any) {
    console.log(data);
  }

  const task = watch('task')
  const submitButtonIsDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            placeholder="Defina qual será a sua tarefa"
            id="task"
            list="task-suggestions"
            type="text"
            {...register("task")}
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
            {...register("minutesAmount", { valueAsNumber: true })}
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

        <StartCountdownButton disabled={submitButtonIsDisabled} type="submit">
          <Play size={24} /> começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
