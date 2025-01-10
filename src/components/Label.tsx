

const Label = ({title } : {title : string}) => {
  return (
    <div className="flex gap-4">
      <div className="size-5 bg-red-600"></div>
      {title}
    </div>
  )
}

export default Label