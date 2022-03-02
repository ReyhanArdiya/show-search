import React from "react";

const SearchContext = React.createContext({
	searchResults : [
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