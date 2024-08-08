interface Props{
    colourChange:any
    buttonName:string
}

const Colour = ({colourChange,buttonName}:Props) => {
  return (
    <div>
      <button
      onClick={colourChange}
      className='border bg-black text-white px-5 py-2'
      >
        {buttonName}
      </button>
    </div>
  )
}

export default Colour
