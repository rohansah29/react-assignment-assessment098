import Counter from "../../counter/Counter";
import style from "../container/Container.module.css"

function Container({children}) {
  return <div data-testid="common-container" className={style.container}>{children}</div>;
}

export default Container;
