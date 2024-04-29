import RegisteForm from '@/components/Registaration/Registration';

async function getData () {
	const res = await fetch('http://localhost:3000/api/checkdb', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		}
	});

	return res.json();
}


export default function Home() {
	return (
	<main >
		<RegisteForm />
	</main>
	);
}
