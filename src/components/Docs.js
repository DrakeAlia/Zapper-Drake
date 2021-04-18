import { useState, useEffect, } from "react";

// const Docs = () => {
//     return (
//         <div>
//             <h1>Docs</h1>
//         </div>
//     );
// };

const Docs = () => {
    const [docs, setDocs] = useState("");

    useEffect(() => {
        console.log(Docs)
     }, [Docs]); 

    //  return (
    //     <div>Docs</div>
    // )
    return (
        <div className='docs'>
            
        </div>
    )
}




export default Docs;