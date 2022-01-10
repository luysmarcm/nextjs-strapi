// import { gql, useQuery } from "@apollo/client";


// const QUERY = gql`
// 	query Categories {
// 		categories {
// 			id
// 			name
// 		}
// 	}
// `;

// export default function Category() {
// 	const { data, loading, error } = useQuery(QUERY);

// 	if (loading) {
// 		return <h2>Loading...</h2>;
// 	}

// 	if (error) {
// 		console.error(error);
// 		return null;
// 	}

// 	const categories = data.categories;

// 	return (
// 		<div>
// 			{categories.map((category) => (
// 				<div key={category.id} >
// 					<h3>{category.name}</h3>
// 					<p>{category.id}</p>
// 				</div>
// 			))}
// 		</div>
// 	);
// }
