import style from "../mobileInfo/MobileInfo.module.css"
// \src\Components\mobileInfo\MobileInfo.module.css
const MobileInfo = () => {
  return <div data-testid="mobile_info" className={style.container} >
    <h1 className={style.heading}>Mobile Operating System</h1>
    <ul>
      <li>Android</li>
      <li>Blackberry</li>
      <li>iPhone</li>
      <li>Windows Phone</li>
    </ul>
    <h1 className={style.heading}>Mobile Manufacturers</h1>
    <ul>
      <li>Samsung</li>
      <li>HTC</li>
      <li>Micromax</li>
      <li>Apple</li>
    </ul>
  </div>;
};
export default MobileInfo;
