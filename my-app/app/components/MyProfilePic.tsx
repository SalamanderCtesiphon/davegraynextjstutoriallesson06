import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto items-start">
      <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/vlcsnap-2023-01-14-18h24m02s588.png"
        width={200}
        height={200}
        alt="Shannon"
        priority={true}
      />
    </section>
  )
}
