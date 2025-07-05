import { Button } from "@/shared/ui/button";
import { useCounterStore } from "@/utilites/counter-store";

interface CounterViewProps {}

export const CounterView = (props: CounterViewProps) => {
  const count = useCounterStore((state) => state.count);
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);

  return (
    <>
      <div>{count}</div>
      <div>
        <Button onClick={increase}>Increase</Button>
        <Button onClick={decrease}>Decrease</Button>
      </div>
    </>
  );
};
