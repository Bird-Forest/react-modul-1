export const Button = ({ variant = 'red', children, discount = false }) => {
  return (
    <button className={variant}>
      {children}
      {discount && <span className="sale">Sale</span>}
    </button>
  );
};

// ==================================
// export const Button = props => {
//   console.log('prop:', props);
//   return (
//     <>
//       <button className="quwerty">
//         <span className={props.variant} />
//         {props.children}
//       </button>
//     </>
//   );
// };
// =====================================
