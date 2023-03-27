import React from "react"
import ContentLoader from "react-content-loader"
import s from '../ItemProduct/ItemProduct.module.css';

const Skeleton = () => (
  <ContentLoader 
  className={s.wrapper}
    speed={3}
    width={335}
    height={450}
    viewBox="0 0 335 450"
    backgroundColor="#f3eded"
    foregroundColor="#c7c6c6"
  >
    <rect x="0" y="209" rx="10" ry="10" width="335" height="25" /> 
    <rect x="0" y="244" rx="10" ry="10" width="335" height="35" /> 
    <rect x="0" y="0" rx="0" ry="0" width="335" height="200" /> 
    <rect x="0" y="290" rx="0" ry="0" width="217" height="30" /> 
    <rect x="0" y="340" rx="0" ry="0" width="139" height="48" /> 
    <rect x="280" y="342" rx="0" ry="0" width="35" height="35" /> 
    <rect x="0" y="410" rx="0" ry="0" width="222" height="20" />
  </ContentLoader>
)

export default Skeleton