import type GoofyButtonProps from "../../props/GoofyButtonProps";

function GoofyButton(props: GoofyButtonProps) {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.children}
    </button>
  );
}

export default GoofyButton;
