import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Instagram 2.0</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* <h1>Insta clone</h1> */}
      <Header />
		</div>
	);
}
