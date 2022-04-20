import * as React from "react";

function IconHeartMinus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart-minus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13.002 20l-1.002 1l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.003 5.996" /><path d="M14 17h6" /></svg>;
}

export default IconHeartMinus;