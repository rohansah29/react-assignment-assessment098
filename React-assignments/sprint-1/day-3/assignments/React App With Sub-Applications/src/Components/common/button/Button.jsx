import style from "../button/Button.module.css"

function Button({text,onClick,disabled}) {
  return <button disabled={disabled} data-testid="common-button" onClick={onClick} className={style.button}>{text}</button>;
}

export default Button;
