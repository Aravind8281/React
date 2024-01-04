/*fragment is a lightweight syntax that allows you to group multiple elements without adding extra nodes to the DOM. 
Fragments were introduced to address the issue where JSX syntax requires a single parent element. 
Fragments provide a way to group multiple elements without introducing an additional wrapping element in the DOM.*/

const ComponentWithFragment = () => {
  return (
    <>
      <div>Element 1</div>
      <div>Element 2</div>
    </>
  );
};
