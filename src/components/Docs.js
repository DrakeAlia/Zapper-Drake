import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

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
    console.log(Docs);
  }, [Docs]);

  //  return (
  //     <div>Docs</div>
  // )
//   return (
//     <Link to={`/docs`} className="docs">
//       <div className="Docs"></div>
//     </Link>
	return (
		<Documentation>
			<DocsHeader>
				Introduction
            
			</DocsHeader>
			<DocsNav>
            </DocsNav>
            <DocsBody>
            </DocsBody>
            <DocsFooter>
            </DocsFooter>
		</Documentation>
	);
};

const Documentation = styled.div`
display: flex;
justify-content: center;
`;

const DocsHeader = styled.div`
`;

const DocsNav = styled.div`
`;

const DocsBody= styled.div`
`;

const DocsFooter = styled.div`
`;

export default Docs;
