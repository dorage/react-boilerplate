import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/states/counter";

interface RootProps {}

const Root = (props: RootProps) => {
  const { counter, increase, decrase } = useCounterStore();

  return (
    <main>
      <h1 className="text-center text-2xl font-bold">
        React Capactior Boilerplate
      </h1>
      <div>
        <div>{counter}</div>
        <div>
          <Button onClick={increase}>Increase</Button>
          <Button onClick={decrase}>Decrease</Button>
        </div>
      </div>
    </main>
  );
};

export default Root;
