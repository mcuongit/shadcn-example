import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { increment, decrement } from "./counter-slice";
import { Button } from "@/components/ui/button";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center">
      <Button onClick={() => dispatch(decrement())} variant={"ghost"}>
        -
      </Button>
      <div className="p-3">{count}</div>
      <Button onClick={() => dispatch(increment())} variant={"ghost"}>
        +
      </Button>
    </div>
  );
}
