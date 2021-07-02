import { useState } from "react";

import cn from "classnames";
import { RenderCount } from "./RederCount";
import { MemoizedButton, Details, Header, MemoizedDrawer } from "./components";
import { useCallback } from "react";

export default function App() {
  const [chiefs, setChiefs] = useState<Array<string>>([]);
  const [value, setValue] = useState<string>("");


  const onSetValue = useCallback((_value: string) => setValue(_value), []);

  const onStartAddChief = useCallback(
    (chief: string) => setChiefs((prev) => [chief, ...prev]),
    []
  );

  const onMiddleAddChief = useCallback(
    (chief: string) => {
      setChiefs((prev) => {
        const middlePos = Math.floor(chiefs.length / 2);
        const temp = [...prev];

        temp.splice(middlePos, 0, chief);
        return [...temp];
      });
    },
    [chiefs.length]
  );

  const onEndAddChief = useCallback(
    (chief: string) => setChiefs((prev) => [...prev, chief]),
    []
  );

  const onDelete = useCallback((index: number) => {
    setChiefs((prev) => {
      const temp = [...prev];
      temp.splice(index, 1);
      return [...temp];
    });
  }, []);

  const buttonHandlerBack = useCallback(() => {
    console.log("Назад");
  }, []);

  const buttonHandlerNext = useCallback(() => {
    console.log("Вперёд");
  }, []);

  return (
    <div className="App">
      <MemoizedDrawer>
        <div className="planningContent">
          <Header />
          <Details
            onStartAddChief={onStartAddChief}
            onMiddleAddChief={onMiddleAddChief}
            onEndAddChief={onEndAddChief}
            onSetValue={onSetValue}
            value={value}
          />
          <h2>Руководители</h2>
          {chiefs?.map((chief, index) => {
            return (
              <div className="relative">
                {chief}
                <MemoizedButton
                  className={"deleteButton"}
                  onClick={() => onDelete(index)}
                >
                  Удалить
                </MemoizedButton>

                <RenderCount />
              </div>
            );
          })}
        </div>

        <div className="buttonContainer">
          <MemoizedButton
            className={cn(["buttonOutline", "buttonCommon", "buttonMedium"])}
            onClick={buttonHandlerBack}
          >
            Назад
          </MemoizedButton>
          <MemoizedButton
            className={cn(["buttonPrimary", "buttonCommon", "buttonMedium"])}
            onClick={buttonHandlerNext}
          >
            Вперед
          </MemoizedButton>
        </div>
      </MemoizedDrawer>
    </div>
  );
}
