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
			<DocsNav> <br></br>
            Introduction <br></br>
                API <br></br>
                Getting Started <br></br>
                Endpoints <br></br>
                API Guides <br></br>
                Token Balances <br></br>
                Supported Tokens and Prices <br></br>
                Gas Prices <br></br>
                Protocol Balances <br></br>
                Pool Stats <br></br>
                Vault Stats <br></br>
                Zap In <br></br>
                Zap Out <br></br>
                Smart Contracts <br></br>
                Learn <br></br> 
                DashBoard <br></br>
                Exchange <br></br>
                Pool <br></br>
                Bridge <br></br>
                Farm <br></br>
                Additional Resources <br></br>
                Brand Assets <br></br>
                Join Our Discord <br></br>
                Tutorials FAQs <br></br>
                Feature Requests <br></br>
            </DocsNav>
            <DocsBody>
                Making DeFi easy to use
                <DocsFeatures>Features</DocsFeatures>
                <DocsZapperApi>1. Zapper API</DocsZapperApi>
                <DocsSmartContracts>2. Smart Contracts</DocsSmartContracts>
                <DocsLearnZapper>3. Learn Zapper</DocsLearnZapper>
                If you have questions or would like to learn more to about Zapper feel free to join our Discord
                <DocsIndex>Getting Started</DocsIndex>
            </DocsBody>
            <DocsFooter>
                WAS THIS PAGE HELPFUL?
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

const DocsFeatures= styled.div`
`;

const DocsZapperApi = styled.div`
`;

const DocsSmartContracts = styled.div`
`;

const DocsLearnZapper = styled.div`
`;

const DocsIndex = styled.div`
`;

const DocsFooter = styled.div`
`;

export default Docs;
