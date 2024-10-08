import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1 className="font-bold">CPRG 306: Web Development 2 - Assignments</h1>
      <p className="m-2">
      <Link href ="./dogtrial">Dog</Link>
      </p>
      <p className="m-2">
      <Link href ="./week-2">week-2</Link>
      </p>
      <p className="m-2">
      <Link href ="./week-3">week-3</Link>
      </p>
      <p className="m-2">
      <Link href ="./week-4">week-4</Link>
      </p>
      <p className="m-2">
      <Link href ="./week-5">week-5</Link>
      </p>
      <p className="m-2">
      <Link href ="./week-6">week-6</Link>
      </p>
    </main>
  );
}
