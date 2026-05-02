import type MainContainerProps from "../../props/MainContainerProps";

function MainContainer(props: MainContainerProps) {
  return (
    <div
      className={
        "bg-amber-50 dark:bg-stone-900 fixed top-24 left-0 bottom-18 w-full flex flex-1 flex-col overflow-auto scrollbar-thin p-4"
      }
    >
      <div className="flex flex-1 flex-col  p-8 border dark:border-amber-50">
        {props.children}
      </div>
    </div>
  );
}

export default MainContainer;
