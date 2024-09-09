import { useForm } from "react-hook-form";
import { FormContainer, MinutsAmountInput, TaskInput } from "./styles";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informa a tarefa"),
  minutesAmount: zod
    .number()
    .min(1, "O cliclo precisa ser de no mínimo 5 minutos.")
    .max(90, "O cliclo precisa ter de no máximo 90 minutos."),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

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
