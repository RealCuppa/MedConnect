function Button({className, label, onclick, type}) {
  return(
    <button type={type} className={className} onClick={onclick}>{label}</button>
    );
}

export default Button;