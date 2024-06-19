async function getRandom() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompt`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const { data } = await getRandom();

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: data.choices[0].message.content as string,
      }}
    />
  );
}
