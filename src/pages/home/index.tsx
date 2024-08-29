import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutsAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./styles";
import { useState } from "react";

const  newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informa a tarefa'),
  minutesAmount: zod.number().min(5, 'O cliclo precisa ser de no mínimo 5 minutos.').max(1000, 'O cliclo precisa ter de no máximo 1000 minutos.'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
}

export function Home() {

  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });

  function handleCreateNewCycle(data: NewCycleFormData) {

    const newCycle : Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(newCycle.id);

    reset();
  }

  const activeCycle = cycles.find((cycle)=> cycle.id === activeCycleId)

  // Time calc block
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSecond = activeCycle ? totalSeconds - amountSecondsPassed : 0
  const minutesAmount = Math.floor(currentSecond / 60)
  const secondsAmount = currentSecond % 60

  // as variaveis minutes e seconds abaixo estão usando a função string com metodo
  // padStart para preencher os valores de segundos em caso de string com apenas um caracter
  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')
  // Time calc block

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
            max={1000}
            {...register("minutesAmount", { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        <StartCountdownButton disabled={submitButtonIsDisabled} type="submit">
          <Play size={24} /> começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
