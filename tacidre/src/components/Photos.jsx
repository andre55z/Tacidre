export default function Photos({src, key}){

    return(
        <div >
            <img src={src} key={key} className="animate-fade-left rounded-[30px]" />            
        </div>
    )
}