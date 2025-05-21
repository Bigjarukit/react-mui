import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

type arrayType = number[] | [];

export default function LoginPageTest() {
  const [numbers, setNumbers] = useState<number>(0);
  const [arrays, setArrays] = useState<arrayType>([]);


  const fnAddData = () => {
    setArrays([...arrays, numbers]);
  };

  const fnDelete = (index: number) => {
    const copy = [...arrays];
    copy.splice(index, 1);
    setArrays(copy);
  };

  
  console.log("3", arrays);
  return (
    <div>
      <p>test array</p>

      <input
        type="number"
        className="border-red-400 border-2"
        onChange={(e) => {
          setNumbers(Number(e.target.value));
        }}
      ></input>

      <button onClick={() => fnAddData()}>add</button>

      <div className="p-7">
        {arrays.map((item, index) => (
          <Stack
            key={index}
            direction={"row"}
            sx={{
              gap: "4px",
              borderWidth: "2px",
              borderColor: "gray",
              justifyContent: "space-between",
            }}
          >
            <div className="flex " key={index}>
              {item}
            </div>
            <div>
              <button onClick={() => fnDelete(index)}>delete</button>
            </div>
          </Stack>
        ))}
      </div>
    </div>
  );
}
