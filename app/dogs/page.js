import Image from 'next/image';

export default async function Dogs() {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const dog = await response.json();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          This is the dogs page.
        </h1>
        <img src={dog.message} alt="A random dog" className="mt-6 rounded-lg shadow-lg" />
      </main>
    </div>
  );
}