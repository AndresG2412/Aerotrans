import Link from "next/link";

export default function Home() {
	return (
		<>
			<h1 className="font-bold text-3xl">Hola</h1>

			<Link href="./Pages/Pedido">pedir aqui</Link>
		</>
	);
}
