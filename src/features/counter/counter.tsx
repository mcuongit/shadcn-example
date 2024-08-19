import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { increment, decrement } from "./counter-slice";
import { Button } from "@/components/ui/button";
export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <pre>{count}</pre>
      <Button onClick={() => dispatch(decrement())}>-</Button>
    </div>
  );
}
