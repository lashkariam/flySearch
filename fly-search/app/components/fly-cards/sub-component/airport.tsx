interface Props {
    title:string
}
export default function Airport ({title}:Props){
    return (<div className="md:hidden text-xs">
        {
          title
        }
      </div>)
}