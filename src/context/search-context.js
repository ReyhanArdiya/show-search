import React from "react";

const SearchContext = React.createContext({
	results : [
		{
			img          : "",
			name         : "",
			officialSite : "",
		},
		{
			img          : "",
			name         : "",
			officialSite : "",
		}
	]
});

export default SearchContext;