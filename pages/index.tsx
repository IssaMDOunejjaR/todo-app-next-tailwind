import type { NextPage } from "next";
import Head from "next/head";
import { useTheme } from "next-themes";
import Item from "../components/Item";

const Home: NextPage = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const newTheme = theme === "dark" ? "light" : "dark";

	return (
		<>
			<Head>
				<title>Todo</title>
			</Head>

			<main className="w-[768px]">
				<div className="flex justify-between items-center">
					<h1 className="uppercase text-2xl font-bold md:text-4xl">
						Todo
					</h1>
					<img
						src="/images/icon-sun.svg"
						alt="Sun"
						className="w-8 h-8"
					/>
				</div>

				<div className="relative my-4 md:my-6">
					<input
						type="text"
						placeholder="Create a new todo..."
						className="w-full py-5 pl-16 text-xl bg-[hsl(var(--very-dark-desaturated-blue))] focus:outline-none"
					/>
					<span className="absolute top-[20px] left-5 w-7 h-7 rounded-full border-[1px] border-[hsl(var(--very-dark-grayish-blue))]"></span>
				</div>

				<div>
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<div className="p-4 flex justify-between text-[hsl(var(--very-dark-grayish-blue))] bg-[hsl(var(--very-dark-desaturated-blue))] text-xs">
						<div>5 items left</div>
						<ul className="flex space-x-3">
							<li>All</li>
							<li>Active</li>
							<li>Completed</li>
						</ul>
						<div>Clear Completed</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
