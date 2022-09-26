import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export interface Guess {
  id: number;
  candySlots: string[];
  scorePegs: string[];
}

interface BoardContextType {
  board: Guess[];
  setBoard: Dispatch<SetStateAction<Guess[]>>;
  turn: number;
  setTurn: Dispatch<SetStateAction<number>>;
  refetch: boolean;
  setRefetch: Dispatch<SetStateAction<boolean>>;
  compGuess: {
    current: string[];
  };
}

interface Props {
  children: ReactElement;
}

const BoardContext = createContext<BoardContextType>({} as BoardContextType);

export const candyList = ["yellow", "red", "green", "orange", "blue", "purple"];

const initGuesses = [...Array(10).keys()].map((el) => ({
  id: el,
  candySlots: ["#E7E9EB", "#E7E9EB", "#E7E9EB", "#E7E9EB"],
  scorePegs: ["#E7E9EB", "#E7E9EB", "#E7E9EB", "#E7E9EB"],
}));

// const goal = [...Array(4).keys()].map(
//   () => candyList[Math.floor(Math.random() * 4)]
// );

const goal = ["yellow", "green", "red", "red"];

export default function BoardProvider(props: Props) {
  const { children } = props;
  const [board, setBoard] = useState<Guess[]>(initGuesses);
  const [turn, setTurn] = useState<number>(0);
  const [refetch, setRefetch] = useState<boolean>(false);
  const compGuess = useRef<string[]>(goal);

  useEffect(() => {}, [refetch]);

  return (
    <BoardContext.Provider
      value={{
        board,
        setBoard,
        turn,
        setTurn,
        refetch,
        setRefetch,
        compGuess,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}

export const useBoardContext = () => useContext(BoardContext);
