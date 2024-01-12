export default function HeaderDev({title, subtitle, disc, img}) {
  return (
    <div className='w-[100%] h-[70vh] flex'>
    <div className='w-[50%] p-9'>
      <h3>We are provide 1</h3>
      <h1 className='text-[2.5rem] font-[700]'>{title}</h1>
      <h2 className='text-[1.4rem] mb-4'>{subtitle}</h2>
      <p>{disc}</p>
      <button className='mt-8 border-[4px] rounded-2xl px-7 py-2 text-[1.5rem] font-[700] tracking-wide text-[green] hover:bg-[green] hover:text-[white]'>get start</button>
    </div>
    <div className='w-[50%] bg-[#F5EE99]'>
      <img src={img} alt="Image is not found" />
    </div>
  </div>
  )
}
