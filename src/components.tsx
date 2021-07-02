import React from "react";
import { FC } from "react";
import { RenderCount } from "./RederCount";

interface ButtonProps {
  [key: string]: any;
}

export const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <RenderCount />
      {children}
    </button>
  );
};

export const Stepper = () => {
  return (
    <div className="stepperWrapper">
      <RenderCount />
      <span className="stepperStep">3</span>
      <span className="stepperTitle">Выбор руководителя</span>
    </div>
  );
};

export const Linear = () => {
  return (
    <div className="linearWrapper">
      <RenderCount />
      <p className="linearLabel">Линейный руководитель</p>
      <p className="linerName">Евгений Николаевич Понасенков</p>
    </div>
  );
};

interface InputProps {
  value: any;
  onChange: any;
}

export const Input: FC<InputProps> = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (str: string) => void;
}) => {
  return (
    <div className="inputWrapper">
      <RenderCount />
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        value={value}
      />
    </div>
  );
};

interface DetailsProps {
  [key: string]: any;
}

export const Details: FC<DetailsProps> = ({
  onStartAddChief,
  onMiddleAddChief,
  onEndAddChief,
  value,
  onSetValue,
}) => {
  return (
    <div className="content">
      <RenderCount />
      <MemoizedStepper />
      <MemoizedLinear />
      <MemoizedInput value={value} onChange={onSetValue} />
      <div className="relative">
        <MemoizedButton
          className="addFunctionalButton"
          onClick={() => onStartAddChief(value)}
        >
          + Добавить руководителя в начало
        </MemoizedButton>
        <RenderCount />
      </div>

      <div className="relative">
        <Button
          className="addFunctionalButton"
          onClick={() => onMiddleAddChief(value)}
        >
          + Добавить руководителя в середину
        </Button>
        <RenderCount />
      </div>

      <div className="relative">
        <Button
          className="addFunctionalButton"
          onClick={() => onEndAddChief(value)}
        >
          + Добавить руководителя в конец
        </Button>
        <RenderCount />
      </div>
    </div>
  );
};

export const Header = () => {
  return <h1>Новый отпуск</h1>;
};

interface DrawerProps {
  [key: string]: any;
}

export const Drawer: FC<DrawerProps> = ({ children }) => {
  return (
    <div className="drawer">
      <div className="wrapper">{children}</div>
    </div>
  );
};

export const MemoizedLinear = React.memo(Linear);
export const MemoizedDrawer = React.memo(Drawer);
export const MemoizedStepper = React.memo(Stepper);
export const MemoizedButton = React.memo(Button);
export const MemoizedInput = React.memo(Input);
