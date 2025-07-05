import { CounterStoreProvider } from "@/utilites/counter-store";
import { CounterView } from "@/widgets/counter";

interface MainpageProps {}

const MainPage = (props: MainpageProps) => {
  return (
    <main>
      <h1 className="text-center text-2xl font-bold">
        React Capactior Boilerplate
      </h1>
      <div>
        <CounterStoreProvider>
          <CounterView />
        </CounterStoreProvider>
      </div>
    </main>
  );
};

export default MainPage;
