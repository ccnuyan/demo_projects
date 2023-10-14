import React, { useEffect, useState } from "react";



const Label: React.FC<{ onClick: React.MouseEventHandler, text: string }> = ({ onClick, text }) => {
  useEffect(() => {
    console.log(`${text} rerendered`)
  })
  return <div onClick={onClick}>{text}</div>;
}

const MemorizedLabel = React.memo(Label);

export function App() {
  const [, setState] = useState({});
  const onClick = () => setState({});
  const memorizedOnLabelClick = React.useCallback(() => { }, []);
  useEffect(() => {
    console.log(`parent rerendered`)
  })
  return (
    <div>
      <button onClick={onClick}>Click</button>
      <h1>without useCallback</h1>
      {/* <Label onClick={onClick} text="Label" />
      <MemorizedLabel onClick={onClick} text="Memo Label" /> */}
      <h1>with useCallback</h1>
      <Label onClick={memorizedOnLabelClick} text="Label(useCallback)" />
      <MemorizedLabel
        onClick={memorizedOnLabelClick}
        text="Memo Label(useCallback)"
      />
    </div>
  );
}
