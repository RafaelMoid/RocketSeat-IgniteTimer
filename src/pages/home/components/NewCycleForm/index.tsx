import { FormContainer, MinutsAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { CyclesContext } from "../..";
import { useFormContext } from "react-hook-form";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        placeholder="Defina qual será a sua tarefa"
        id="task"
        list="task-suggestions"
        type="text"
        disabled={!!activeCycle}
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
        step={1}
        max={1000}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
