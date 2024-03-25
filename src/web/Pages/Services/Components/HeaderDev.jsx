import style from './HeaderDev.module.css'

export default function HeaderDev({title, subtitle, disc, img,btnclick}) {
  return (
    <div className={style.mdiv}>
    <div className={style.headertext}>
      <h3>We are providing</h3>
      <h1 className=''>{title}</h1>
      <h2 className=''>{subtitle}</h2>
      <p>{disc}</p>
      <button className={style.headerbtn} onClick={btnclick}>Get start</button>
    </div>
    <div className={style.headerimg}>
      <img src={img} alt="Image is not found" />
    </div>
  </div>
  )
}
