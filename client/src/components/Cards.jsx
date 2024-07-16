import { useEffect, useState } from "react";
import fetchData from "../services/api";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
const Cards = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const handleData = async () => {
			try {
				const result = await fetchData();
				// console.log(result[0].dishName);
				setData([...result]);
				// console.log(data);
			} catch (error) {
				console.log("error while calling axios", error);
			}
		};
		handleData();
	}, []);

	const togglePublish = async (dishId) => {
		try {
			setLoading(true);
			const toastId = toast.loading("Publishing Dish, Please wait!");
			await axios.get(`http://localhost:3000/toggle/${dishId}`);
			setTimeout(() => {
				setLoading(false);
				toast.dismiss(toastId);

				toast.success("Dish Publish success!");
				setData((prevState) => {
					return prevState.map((item) => {
						return item.dishId === dishId
							? { ...item, isPublished: !item.isPublished }
							: item;
					});
				});
			}, 1000);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Toaster />
			<div className="mt-3 grid grid-cols-1  md:grid-cols-2 justify-items-center lg:grid-cols-3  flex-wrap gap-y-10">
				{data.map((item) => (
					<div
						className="w-[90%] md:w-[80%] rounded-lg shadow-md border border-gray-300 p-3"
						key={item.dishId}
					>
						<img
							className="object-cover w-full h-48"
							src={item.imageUrl}
							alt="image"
						/>
						<div className="p-4">
							<h4 className="text-xl font-semibold text-blue-600">
								{item.dishName}
							</h4>
							{/* <p className="mb-2 leading-normal">{items.content}</p> */}
							<button
								type="button"
								disabled={loading}
								onClick={() => togglePublish(item.dishId)}
								className={`px-4  flex py-2 items-center  justify-center gap-2 text-sm text-blue-100 ${
									item.isPublished ? "bg-green-600" : "bg-blue-600"
								} rounded shadow`}
							>
								{item.isPublished ? "Published" : "Publish"}
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Cards;
