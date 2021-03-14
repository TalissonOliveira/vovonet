
import React from "react";

import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" > 
<path d="M0 0h48v48h-48z" fill="none" /><path d="M0 0h48v48h-48z" fill="none"/><path d="M2 36v6h6c0-3.31-2.69-6-6-6zm0-8v4c5.52 0 10 4.48 10 10h4c0-7.73-6.27-14-14-14zm36-14h-28v3.27c7.92 2.56 14.17 8.81 16.73 16.73h11.27v-20zm-36 6v4c9.94 0 18 8.06 18 18h4c0-12.15-9.85-22-22-22zm40-14h-36c-2.21 0-4 1.79-4 4v6h4v-6h36v28h-14v4h14c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4z"/>
	
	
	<metadata>
		<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:dc="http://purl.org/dc/elements/1.1/">
			<rdf:Description about="https://iconscout.com/legal#licenses" dc:title="Cast, Device, Connected, Range, Network, Signal" dc:description="Cast, Device, Connected, Range, Network, Signal" dc:publisher="Iconscout" dc:date="2016-12-14" dc:format="image/svg+xml" dc:language="en">
				<dc:creator>
					<rdf:Bag>
						<rdf:li>Google Inc.</rdf:li>
					</rdf:Bag>
				</dc:creator>
			</rdf:Description>
		</rdf:RDF>
    </metadata>
	
</svg>`

export default () => <SvgXml xml={xml} fill='gray' />;

